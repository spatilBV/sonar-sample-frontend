/**
 * Small helpers with a little real logic so SonarQube has something to analyze.
 *
 * NOTE: `classifyScore` below intentionally uses `==` instead of `===`.
 * This is a deliberate code smell so the E2E integration proves that
 * SonarQube Cloud actually reports issues on this project. Once the
 * wiring is confirmed, it can be fixed to `===`.
 */

export function formatPrice(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export function classifyScore(score: number): "high" | "medium" | "low" {
  if (score >= 80) {
    return "high";
  }
  // Intentional smell: loose equality (should be ===) — SonarQube flags this.
  if (score == 50) {
    return "medium";
  }
  if (score >= 50) {
    return "medium";
  }
  return "low";
}
