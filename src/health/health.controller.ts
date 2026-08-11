import { Controller, Get } from "@nestjs/common";
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from "@nestjs/terminus";
import { ConfigurationService } from "../configuration/configuration.service";

@Controller("health")
export class HealthController {
  constructor(
    private readonly _healthCheckService: HealthCheckService,
    private readonly _typeOrmHealthIndicator: TypeOrmHealthIndicator,
    private readonly _diskHealthIndicator: DiskHealthIndicator,
    private readonly _memoryHealthIndicator: MemoryHealthIndicator,
    private readonly _configurationService: ConfigurationService
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this._healthCheckService.check([
      () => this._typeOrmHealthIndicator.pingCheck("database"),
      () =>
        this._diskHealthIndicator.checkStorage("storage", {
          path: "/",
          thresholdPercent:
            this._configurationService.healthDiskThresholdPercent,
        }),
      () =>
        this._memoryHealthIndicator.checkHeap(
          "memory_heap",
          this._configurationService.healthMemoryHeapThresholdBytes
        ),
      () =>
        this._memoryHealthIndicator.checkRSS(
          "memory_rss",
          this._configurationService.healthMemoryRssThresholdBytes
        ),
    ]);
  }
}
