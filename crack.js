const MINIMUM_KEY_LENGTH = 1;
const MAXIMUM_KEY_LENGTH = 13;
const cipherText = "F96DE8C227A259C87EE1DA2AED57C93FE5DA36ED4EC87EF2C63AAE5B9A7EFFD673BE4ACF7BE8923CAB1ECE7AF2DA3DA44FCF7AE29235A24C963FF0DF3CA3599A70E5DA36BF1ECE77F8DC34BE129A6CF4D126BF5B9A7CFEDF3EB850D37CF0C63AA2509A76FF9227A55B9A6FE3D720A850D97AB1DD35ED5FCE6BF0D138A84CC931B1F121B44ECE70F6C032BD56C33FF9D320ED5CDF7AFF9226BE5BDE3FF7DD21ED56CF71F5C036A94D963FF8D473A351CE3FE5DA3CB84DDB71F5C17FED51DC3FE8D732BF4D963FF3C727ED4AC87EF5DB27A451D47EFD9230BF47CA6BFEC12ABE4ADF72E29224A84CDF3FF5D720A459D47AF59232A35A9A7AE7D33FB85FCE7AF5923AA31EDB3FF7D33ABF52C33FF0D673A551D93FFCD33DA35BC831B1F43CBF1EDF67F0DF23A15B963FE5DA36ED68D378F4DC36BF5B9A7AFFD121B44ECE76FEDC73BE5DD27AFCD773BA5FC93FE5DA3CB859D26BB1C63CED5CDF3FE2D730B84CDF3FF7DD21ED5ADF7CF0D636BE1EDB79E5D721ED57CE3FE6D320ED57D469F4DC27A85A963FF3C727ED49DF3FFFDD24ED55D470E69E73AC50DE3FE5DA3ABE1EDF67F4C030A44DDF3FF5D73EA250C96BE3D327A84D963FE5DA32B91ED36BB1D132A31ED87AB1D021A255DF71B1C436BF479A7AF0C13AA14794";

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

console.log("Length " + largestSum.len + " has the largest sum of squared probabilities (" + largestSum.val + ").");
console.log("This is likely to be nonuniform, and therefore the correct key length.");

