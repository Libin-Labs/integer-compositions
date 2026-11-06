import { compositionCount } from '@lp-labs/integer-compositions';
if (compositionCount(5, 3) !== 6n) throw new Error('Count');
// @ts-expect-error invalid argument must be rejected by declarations
compositionCount('5', 3);
