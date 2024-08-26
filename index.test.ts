import { expect, it } from "@effect/vitest";
import { Array, Effect, Metric, MetricKeyType, MetricState, pipe } from "effect";

it.effect("Metric key name is the expected type", () =>
  Effect.gen(function*() {
    const gaugeMetric = Metric.gauge("some_gauge");

    yield* gaugeMetric(Effect.succeed(1));

    const snapshot = yield* Metric.snapshot;

    const gauges = pipe(
      snapshot,
      Array.filter(g => MetricKeyType.isGaugeKey(g.metricKey)),
    );

    expect(Array.length(gauges)).toBe(1);
  }));

it.effect("Metric state type is the expected type", () =>
  Effect.gen(function*() {
    const gaugeMetric = Metric.gauge("some_gauge");

    yield* gaugeMetric(Effect.succeed(1));

    const snapshot = yield* Metric.snapshot;

    const gauges = pipe(
      snapshot,
      Array.filter(g => MetricState.isGaugeState(g.metricState)),
    );

    expect(Array.length(gauges)).toBe(1);
  }));
