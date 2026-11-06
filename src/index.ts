function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
function choose(n: number, k: number): bigint {
  if (k < 0 || k > n) return 0n;
  let c = 1n;
  k = Math.min(k, n - k);
  for (let i = 1; i <= k; i++) c = (c * BigInt(n - k + i)) / BigInt(i);
  return c;
}
export function compositionCount(total: number, parts: number): bigint {
  integer(total, 0, 5000);
  integer(parts, 0, 5000);
  if (total === 0) return parts === 0 ? 1n : 0n;
  if (parts === 0 || parts > total) return 0n;
  return choose(total - 1, parts - 1);
}
