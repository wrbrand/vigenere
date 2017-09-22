const MINIMUM_KEY_LENGTH = 1;
const MAXIMUM_KEY_LENGTH = 13;
const cipherText = "";

// Separate the cipherText into pairs (we're assuming it's ASCII, i.e. pairs of hex digits)
var cipherChars = cipherText.match(/.{1,2}/g);

// Determine likely key length
// If the key length is N, then every Nth character of the plaintext is encrypted using the same shift.
// If we take every Nth character and calculate frequencies, those frequencies should be in permuted order
// If we take every Mth character and calculate frequencies, where M is not a multiple of N, those frequencies should be roughly uniform
// Uniform distributions will be those in which, if i is the number of possible values per character and q is a character,
// the sum of the probabilities of q0...qi is roughly 1/256 (0.0039)

const possibleKeyLengths =  [...new Array(MAXIMUM_KEY_LENGTH + 1).keys()].filter(n=>n>=MINIMUM_KEY_LENGTH);
const possibleCharacters =  [...new Array(256).keys()];

var counters = [];
var sums = {};

console.log(cipherChars.length + " characters of ciphertext provided");
possibleKeyLengths.forEach(l => {
    counters[l] = [];
    // Create a counter for every possible character
    possibleCharacters.forEach(c => counters[l][c] = 0);

    // Dunno what to call this, but the characters at the 0,N,2N positions
    var cosignedCharacters = cipherChars.filter((c,i)=>i%l==0);

    // Count each variation
    cosignedCharacters.forEach(c => counters[l][parseInt(c, 16)]++);

    var totalOccurrences = counters[l].reduce((m,n)=>m+n,0);

    var probabilities = counters[l].map(n => n / totalOccurrences);

    sums[l] = probabilities.reduce((m,p)=>m+(p*p), 0);
});

var largestSum = { len: 0, val: 0.00 };

for(var s in sums)
    (sums[s] > largestSum.val) && (largestSum.val = sums[s]) && (largestSum.len = s);

console.log("Length " + largestSum.len + " has the largest sum of squared probabilties (" + largestSum.val + ").");
console.log("This is likely to be nonuniform, and therefore the correct key length.");

