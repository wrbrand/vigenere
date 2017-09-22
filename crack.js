const MINIMUM_KEY_LENGTH = 1;
const MAXIMUM_KEY_LENGTH = 13;
const CHARACTERS_PER_LINE = 200;
//const cipherText = "F96DE8C227A259C87EE1DA2AED57C93FE5DA36ED4EC87EF2C63AAE5B9A7EFFD673BE4ACF7BE8923CAB1ECE7AF2DA3DA44FCF7AE29235A24C963FF0DF3CA3599A70E5DA36BF1ECE77F8DC34BE129A6CF4D126BF5B9A7CFEDF3EB850D37CF0C63AA2509A76FF9227A55B9A6FE3D720A850D97AB1DD35ED5FCE6BF0D138A84CC931B1F121B44ECE70F6C032BD56C33FF9D320ED5CDF7AFF9226BE5BDE3FF7DD21ED56CF71F5C036A94D963FF8D473A351CE3FE5DA3CB84DDB71F5C17FED51DC3FE8D732BF4D963FF3C727ED4AC87EF5DB27A451D47EFD9230BF47CA6BFEC12ABE4ADF72E29224A84CDF3FF5D720A459D47AF59232A35A9A7AE7D33FB85FCE7AF5923AA31EDB3FF7D33ABF52C33FF0D673A551D93FFCD33DA35BC831B1F43CBF1EDF67F0DF23A15B963FE5DA36ED68D378F4DC36BF5B9A7AFFD121B44ECE76FEDC73BE5DD27AFCD773BA5FC93FE5DA3CB859D26BB1C63CED5CDF3FE2D730B84CDF3FF7DD21ED5ADF7CF0D636BE1EDB79E5D721ED57CE3FE6D320ED57D469F4DC27A85A963FF3C727ED49DF3FFFDD24ED55D470E69E73AC50DE3FE5DA3ABE1EDF67F4C030A44DDF3FF5D73EA250C96BE3D327A84D963FE5DA32B91ED36BB1D132A31ED87AB1D021A255DF71B1C436BF479A7AF0C13AA14794";

const cipherText="8AC5DBCF888BBCB8D3BBDF9E8D9A8FA9A9D5FED9CC8E9682FDBBD4ABC3DACF9E86B8ADDFFEC4D09B90CEA9A4DEFEC9CB9C8BCEAFADD8B5C8DACF9C82B4A1DEAD8DD189DF9AB5A99BBCCCCC8A91CEB1ADD5BA8DC987968DB5ECDFB1C0D7819E9AB8BF9BB2CCCC889ACEADA3C9AAC4D1818CCEB2AA9BAAC5DBCFB181AFABD4B2C4DF81DF8BB0BCD2ACC890CFBE89B8ECCCB1DFD0CF9781B2AA9BAEDFD7818B9DFDBFD6B1D9D68A8D8BB9ECD9A78DCA879ACEAEA5DDAAC4D088DF9DBCA2DFAD8DD189DF9AB4A1DEFEDED680918BFDA8CEB2C1C7CF9E89BCA5D5ADD99E9B978BFDA8CEADD99E9C8F82BCB8CFBBDFDB8BDF8DAFB9C8AA8DD189DF8BBCBECFB6839EBB978BFDB8D2ACC8D28A8C9DFDBFCEB08DDD8E8C9AFDA5CFAD8DCE8E8D8DB5A5D5B98DCC8E869DFDA3DDFEC4D08C9E80B9A9C8BDC8D09C9ACEBBBED4B38DD1999A9CB5A9DABA819E879E82BBECCCBFD49E9B979CB2B9DCB68DD79B8CCEB9ADD2B2D49E9D9A98B2A0CEAAC4D181D1CE8EA1DAB2C19E9D908AB8A2CFAD8DCD8C9E83ADA9C9BBC99E8E9D81A8B897FEC2DD8C8A9EA4A5D5B98DCA879A83AEA9D7A8C8CDCF9680FDB8D3BB8DDA8E9682A4ECDABDCED1828F82B4BFD3B3C8D09B8CCEB2AA9BAAC5DB868DCEB9A5C8B3CCD2CF9387ABA9C8F08DFA9A8C9AFDBFCBACCCC78A9BCEB2BADEAC8DCA878D8BB8ECD3BBCCC8869189FDA1D4ABC3CA9CDF87B3ECD9B2C4D08B9680BAECD8B2C2CB8B8CC2FDBBD3B7C1DBCF8B86B8B59BBCC2CC8ADF9AB5A99BBCD8CC8B9080AEA3D6BB8DDD8E8D89B2A9C8FEC2D8CF8B86B8A5C9FEDECA9D8A89BAA0D2B0CA9E80898BAFBFDEBBDFCDC1DFCC8DBEDEAECCCC8ADF9AB2ECDEB3CFCC8E9C8BFDB5D4ABDF9E8C8D8BBCB8D4ACDE9E8691CEA9A4DEFEDECA969887BCA29BB6CCCB818B9DFDA3DDFEC5DB8393C2FDAEDAACCFDF9D968FB3EE97FECADF9C8F8BB9ECCFB6C89E89969CAEB89BADC2D28B968BAFE29BFCE2D08386CEBCAACFBBDF9E96909BFDA4DAA8C89E84969DAEA9DFFED9D68ADF88B1A9DEAAC4D088DF9DA9A9DABA8DD189DF8AB8ADCFB6819E988D8BA9AFD3FF8F9E9D9A9AA8BED5BBC99EA88D87BAA2C9F0EC9E9C888BB8BCD2B0CA9E8D938FB9A99BB1CB9E89938FAEA4D2B0CA9E9C8B8BB8A09BACC4C88A8B8BB9ECDDACC2D3CF8B86B8ECD6BFDECD86898BFDAEDAACCFDF9D968FB3BF9BB6C4DA8ADF8BB3ADD6BBC1DB8BDF9DB5A5DEB2C99E8E8CCEB5A5C8FEDFD79F8F82B4A2DCFEDFD788979AFDADC9B38DCA878D9BAEB89BB8C2CC9B97C2FDBFDEB0C9D78198CEBCECC8AAC8DB83DF9DB5A3DFFECFD28E9B8BFDB8D4FED9D68ADF86B4A0CFFEC4D09B90CEA9A4DEFEDED1839B87B8BEC8FEDBD79B9E82FDA3C9B9CCD09CD1CE89A4DEFEC9D79C9A83BFA3CCBBC1DB8BDF83B8BED8BBC3DF9D86CEBEBECEB3DDD28A9BCEBBBED4B38DD6868CCEAEADDFBAC1DBCF9E80B9ECC8BFC3D5CF8B81FDB8D3BB8DDD83909BB9A9DFFEDEC98E8D8AF1ECC8AEDFD7819482B4A2DCFED9D68ADF9EBCBED8B6C8DACF9B9BAEB89BA9C4CA87DF8DAFA5D6ADC2D0CF9B9CB2BCD7BBD9CDCF9088FDA9C8BDCCCE869189FDA0D2B8C89E89939BB4A8958AC5DBCF9A80A9A4CEADC8DACF9D8FAFAEDAACC4DF81DF9DAAA5D7A8C8D28A9BCEBCAED4ABD992CF9787AEECC8B6C2DD84DF81BBECDDB7C8CC96DF9CB8A89BB6CCD79DDF9AB2BFC8B7C3D9CF8D81BFB9C8AAC1C7CF9680FDB8D3BB8DD69A9287B9ECDAB7DF9E8C8A9CAFA9D5AADE9E8E8CCEB5A99BB8CCDD8A9BCEA9A4DEFECCCA9B9E8DB6ECD4B88DCA879ACEB9A9DDBBCCCA8A9BCEAEA3D7BAC4DB9DD89DFDAADEB2C1D198DF87B3ECDAACC0CDC1DFCC99ADD6B08DC7808AC2FDAEDAACCFDF9D968FB3EE9B8DC5CC869A85B8A89BAAC5DBCF8C81B1A8D2BBDF9E8E8CCEB5A99BB1CFCD8A8D98B8A89BB6C4CDCF9C81B0BEDABAC89E8691CEB9A9DAAAC590CFBECEBAA0DEBFC0D78198CEAEAFD2B3C4CA8E8DCEAEA1D4AAC89E8EDF86B8ADCDA78DDC839099FDADDCBFC4D09C8BCEA9A4DEFEDFDB819A89BCA8DEF9DE9E9C8F87B6A9DFFEC5DB83928BA9E09BBCDFD7819887B3AB9BBF8DD68A9E98A4ECD8B2C2CB8BDF81ABA9C9FED9D68ADFABBEA3C9BAC4DF81D89DFDA1D2ADD9D78198CEBFBEDAB7C390CFAC86BCA7D2B0CA9E809988FDB8D3BB8DDB89998BBEB8C8FEC2D8CF8B86B8ECCBB1D8D08B9680BAECD9B2C2C9CF8B81FDA4D2AD8DD68A9E8AF1ECFCACC4D9818DCEBFBED4ABCAD69BDF8AB2BBD5FEC5D79CDF9DBEADC9B2C8CACF8C9AAFA9DAB5C8DACF9A8ABAA99BBFCADF86919DA9ECCFB6C89E9C9082B9A5DEAC8ACDCF9C9CA8A8DEB2D49E89909CBAA9DFFEC5DF9A9D8BAFA797FECED28E9189B4A2DCFEC5DF9D9282B8BFC8B2D49E9B90CEA9A4DEFEC1DB898BCEAEA5DFBB8DD189DF86B4BF9BB1DDCE80918BB3B895FEF9D68ADF9DB2A0DFB7C8CCC88CCEAEB8DEBFC99E989787B3A2D2BBC99E8E8CCEB5A99BBAC4CC8A9C9AB8A89BAAC5DBCF9781AFBFDEFECFDF8C94CEBBBED4B38DCA879ACEB9BED2A8C4D088DF8CB1ADDFBB8DD189DF9AB5A99BBCCCCC8D9E9CB4ADD5F08DF99D9689B3BE9BB2C8DF9C978BB9ECD3B7DE9E82909BB3B89BB8C2CC989E9CB9ECDAAD8DCA879ACEB5A3DAACDEDB8386CEADA5DEACCED78198CEBFADCFAAC1DBCF9C9CA4ECD4B88DD6868CCEAAA5D7BAC8CC819A9DAEECD9ACC8DACF8D8FBEA99BACC8CD808A80B9A9DFFECBCC8092CEB5A5C8FECACC86918AB4A2DCFEC1CB81989DF3ECFAFED9C9868D82B4A2DCFECFD28E9B8BFDAED4ABC3DD8A9BCEB5ADC9B3C1DB9C8C82A4ECDDACC2D3CF8B86B8ECD6B7CAD69B86CEA9A4D2BBCB999CDF8CA8AFD0B2C8CCCF9E9DFDA4D2AD8DCC809382B4A2DCFEDFD788979AFDADC9B38DDD839A88A9ECCEAEDADF9D9BC2FDBFDEB0C9D78198CEBCECDDB1C2CACF9088FDAED7B7C3DA869189FDBFCFBBC8D2CF8D87ADBCD2B0CA9E9B979CB2B9DCB68DCA879ACE8EA5D6BFDFD78E91C9AEECDEA6DDD19C9A8AFDABCEB2C1DB9BD1CE9CECDCBFDECE869189FDABCEACCAD28ADF88AFA3D6FED9D68ADF9DB2A0DFB7C8CCC88CCEAABED2AAC5D78198CEB0A3CEAAC59E8E8CCEB5A99BAAD8D38D938BB9ECCFB18DCA879ACEBAA3D7BAC8D0CF8C8FB3A89BBFD99E87969DFDAADEBBD992CF9E80B9ECCCB1DFD38A9BCEBCABD4B0C4C4869189B1B59BB7C39E87969DFDA8DEBFD9D6CF9D8BB9E2FCACC4D9818DC9AEECDEB3C8CC8E938AFDABC9BBC8D0CF909CBFBF9BB9C1DF9D9A8AFDA0CEADD9D89A9382A4ECDAAA8DCA879ACEAAADD7B2C2C9869189FDBFD4B2C9D78A8DCEAEB8C9ABCAD9839680BAECD9BBCBD19D9ACEB5A5C8FECED68A8C9AB3B9CFFEDEC9868D82B8A89BB3C2CB818BC0FD84D2AD8DCD8C9099B1A5D5B98DC880968DB8ECC9BBDBDB9D9D8BAFADCFBBC99E80898BAFECCFB6C89E8B8687B3AB9BB8C2CC82DF87B3ECDAFED9D1819ACEB2AA9BB3C2DD849680BAECD6B7DFCA87D1CEFF95D4AB8DDD868B97FDAEC9BBC99E8B9089AEECC8B6C2CB839BCEB1A9DAACC39E81909AFDB8D4FECCD09B9E89B2A2D2A4C89E96909BAFECD9BBD9CA8A8DC0FDEEE9BBC4D0869189FDA4D2AD8DC98A9E9CA4ECD6B1D8D09BDF8FB5A9DABA819E888D87BAA2C9FEDFDB9C8A83B8A89BB6C4CDCF9581A8BED5BBD49E9B90CEA9A4DEFEE3D19D9A89B2A0D2BFC39E8C969AA4ECD4B88DF9808D94BCA197FEC5D19F9680BAECCFB18DDA868C8DB2BADEAC8DC986918BF1ECCCB1C0DB81D3CEBCA2DFFECCDA999A80A9B9C9BB8DCA80DF8CB2A5D7FED9D68ADF99B4A0DFFECFD280908AFDAFD4BFDFCD869189FDB8D3ACC2CB8897CEB5A5C8FEDEDF999E89B8ECCDBBC4D09CD1BAB5A99BAADFDB84DF9AB2ECFCB1DFC48092CEAAADC8FECBD19D9C8BB9ECCEAEC2D0CFB89CB4ABD5AC8DC9879A80FDB8D3BB8DCD80938AB4A9C9AD8DD189DFADAFA5D5FEDADB9D9ACEB1A9DAADC5DB8BDF9BADA3D5FEC5D782DF8CA4ECDAFECBDF868B86B1A9C8AD8DDD80918DA8AED2B0C89E879ACEB5ADDFFEDAD1809A8AF3ECF3B7DE9E9C9C8FB3A8DAB2C2CB9CDF8FBEB8D2A8C4CA869A9DFDB8D3ACC2CB889781A8B89BAAC5DBCFAC87B0ADC9B7CCD0CF9C87A9B59BB6CCDACF8A80B1A9DAADC5DB8BDF9AB5BED4B0CACDCF9088FDA4DAA8C2DDCF9E80B9ECCEAEDFD18E8DCEBCA1D4B0CA9E868BC9AEECC9BBCBD7819A8AFDBCDAAADFD78C968FB3BF97FEC1DB8E9B87B3AB9BAAC5DB82DF9AB2ECCFBFCED5CF9ECEB5A9DAA8D49E9D9A99BCBEDFFEC2C88A8DCEB5A5C8FEC5DB8E9BC0FD84DEFEC5DF8BDF8CBCBEDEB2D49E829E80BCABDEBA8DCA80DF8BAEAFDAAEC89E9B979CB2B9DCB68DCA879ACEBFADD8B58DDB818B9CBCA2D8BB8DD189DF9AB5A99BB7C3D0CF978BFDA4DABA8DDC8A9A80FDABCEA4D7D2869189FDA5D5F28DDF9CDF8FFDBFCAABCCDACF9088FDBFD4B2C9D78A8D9DFDB8D4ABC3DD8A9BCEA8BCD4B08DD68692C0FD8DDDAAC8CCCF8C9EB4A0D7B7C3D9CF9ECEAEBCD4ABD99E8099CEBFA0D4B1C99E898D81B0ECCFB6C89E839A8FB9A9C9FEC2D8CF8B86B8ECD6BBDFDD8A918FAFA5DEAD8DDF9CDF86B8ECDFB7DED38A928CB8BEDEBA8DD1819ACEB2AA9BAAC5DBCF9088BBA5D8BBDF999CDF8FAFA1C8F28DD68ADF9CB8B8C9BBCCCA8A9BCEA9A39BB6C4CDCF9281A8A2CFFED9D1CF928FB6A99BB6C4CDCF888FA4ECCFB1DADF9D9B9DFD8BD4ACD7D182D3CEAFB9D6B1D8CC8A9BCEA9A39BBDC2D09B9E87B3ECD3B1CCCC8B8CCEB2AA9BAEC1CB819B8BAFE09BBFC3DACF928FB3B59BA7C2CB8198CEAAA9D5BDC5DB9CDF88B2BE9BBFC3C7CF928FB3ECCCB6C29E879E9DFDB8D3BB8DDC8E9C85BFA3D5BB8DCA80DF99AFA9C8AA8DCA879A83FDADCCBFD490";

// Separate the cipherText into pairs (we're assuming it's ASCII, i.e. pairs of hex digits)
cipherChars = cipherText.match(/.{1,2}/g);

const possibleKeyLengths =  [...new Array(MAXIMUM_KEY_LENGTH + 1).keys()].filter(n=>n>=MINIMUM_KEY_LENGTH);
const possibleCharacters =  [...new Array(256).keys()];
const setOfLowerCaseLetterKeyCodes = [...new Array(122 + 1).keys()].filter(n=>n>=97);

console.log(cipherChars.length + " characters of ciphertext provided. \n");
var keyLength = getKeyLength();


// To determine the correct character for each index in the key, we want to first eliminate all those characters whose
// use would result in text outside the printable ASCII range (32-127) (this is an assumption)
var key = [];
var congruentChars = [];
for(var i=0;i < keyLength;i++) {
    // Create an array of all possible characters at each index in the key
    congruentChars[i] = [];
    key[i] = possibleCharacters.slice();
}

// Create a list of all characters congruent (at the same offset % keyLength) to each other
cipherChars.forEach((c,i) =>{ congruentChars[i % keyLength].push(parseInt(c, 16)) });

congruentChars.forEach(function(observedCharacters, position){
    console.log("\nRemoving keys that would result in unprintable characters in position " + position + "...");

    // Filter out any possible keys that would result in values outside the printable ASCII range
    //console.log(key[position].length + " possible, removing those that would result in values < 32...");
    /*key[position] = key[position].filter((possibleValue) => {
        return observedCharacters.every(c => (c ^ possibleValue) >= 32)
    });

    //console.log(key[position].length + " possible, removing those that would result in values > 127...");

    key[position] = key[position].filter((possibleValue) => {
        return observedCharacters.every(c => (c ^ possibleValue) <= 127)
    });*/

    console.log('Number of possible characters at position ' + position + ' is now ' + key[position].length + ' (from 256)');

   // console.log('Checking probability distribution of remaining keys...');

    var sums = [];
    // For each possible key character at this position
    key[position].forEach(function(testChar) {
        var counters = [];
        possibleCharacters.forEach(c => counters[c] = 0);
        // Filter out characters that aren't lowercase letters
        var lowercaseCongruentLetters = observedCharacters.filter(c => setOfLowerCaseLetterKeyCodes.indexOf(c ^ testChar) !== -1);

        // Create a counter in counters[c ^ testChar] for every lowercase letter
        // i.e. counters[97] will be the count of occurrences of 'a' (97) when testChar is used as the key
        //console.log(lowercaseCongruentLetters);
        lowercaseCongruentLetters.forEach(c => typeof counters[c ^ testChar] == 'undefined' ? counters[c ^ testChar] = 1 : counters[c ^ testChar]++);

        var probabilities = counters.filter((c) => typeof c !== 'undefined').map(n => n / lowercaseCongruentLetters.length);

        sums[testChar] = probabilities.map(c=>c).reduce((m,p)=>m+(p*p), 0);
    });

    var mostLikelyOffsets = [];
    sums.forEach((s,i) => { mostLikelyOffsets.push({ i: i, sum: s }) } );

    mostLikelyOffsets = mostLikelyOffsets.sort((a,b) => a.sum - b.sum).slice(0,10);

    console.log("\nMost likely offsets for position " + position + ":");
    mostLikelyOffsets.forEach(offset => {
       console.log(offset.i + " (0x" + offset.i.toString(16).toUpperCase() +  ") (sum: " + offset.sum + ")")
    });

    key[position] = key[position].filter(c => mostLikelyOffsets.some(o => o.i == c));
});

console.log("\nOverall likely offsets table:");
console.log(key);

console.log("Press any key to enter investigation mode. 'x' to exit.")
var Wheel = function () {
    var wheel = Object.create(Wheel.prototype);
    wheel.positions = [];

    for(var i = 0; i < keyLength; i++) {
        wheel.positions[i] = 0;
    }

    wheel.getKey = function(nice) {
        var testKey = [];
        wheel.positions.forEach((rotation, i) => {
            testKey.push(key[i][rotation]);
        });
        if(nice) {
            return testKey.map(c => c.toString(16).toUpperCase()).join('-');
        } else {
            return testKey;
        }
    };

    wheel.decode = function() {
        var plaintextKeycodes = [];

        var testKey = wheel.getKey();

        cipherChars.forEach((ch, i) => {
            var c = parseInt(ch, 16);
            var k = testKey[i % testKey.length];
            plaintextKeycodes.push(c ^ k);
        });

        return plaintextKeycodes.map(k => String.fromCharCode(k)).join("");
        //return plaintextKeycodes.join(",");
    };

    return wheel;
};


var stdin = process.openStdin();
var wheel = new Wheel();
stdin.addListener("data", function(d) {
    const input = d.toString().trim();
    const inputInt = parseInt(input) - 1;

    if(inputInt >= 0 && inputInt < keyLength) {
        console.log("\n\n");

        // If this falls in the range of key lengths, treat it as an instruction to progress the "wheel" one turn
        // on the key character at this index (starting from 0)
        if(wheel.positions[inputInt] + 1 == key[inputInt].length) {
            wheel.positions[inputInt] = 0;
        } else {
            wheel.positions[inputInt]++;
        }

        console.log("Current Rotations:");
        console.log(wheel.positions.toString() + " (1-indexed; enter an index to rotate)");
        console.log(wheel.getKey(true));

        var plaintext = wheel.decode();
        for(var i=0; i<=plaintext.length; i += CHARACTERS_PER_LINE) {
            console.log('');
            console.log(plaintext.slice(i, Math.min(i + CHARACTERS_PER_LINE, plaintext.length - 1)));
            console.log([...new Array(i + CHARACTERS_PER_LINE).keys()].filter(n=>n>=i).map(c => (c % keyLength) + 1).join(''));//.map(n=>(n%keyLength).toString()).join(""));
        }
    } else if(input.toLowerCase() == "x") {
        process.exit();
    }

});

function getKeyLength() {
    const counters = [];
    var sums = {};

    possibleKeyLengths.forEach(l => {
        counters[l] = [];
        // Create a counter for every possible character
        possibleCharacters.forEach(c => counters[l][c] = 0);

        // Dunno what to call this, but the characters at the 0,N,2N positions
        var congruentChars = cipherChars.filter((c,i)=>i%l==0);

        // Count each variation
        congruentChars.forEach(c => counters[l][parseInt(c, 16)]++);

        // If the key length is N, then every Nth character of the plaintext is encrypted using the same shift.
        // If we take every Nth character and calculate frequencies, those frequencies should be in permuted order
        // If we take every Mth character and calculate frequencies, where M is not a multiple of N, those frequencies should be roughly uniform
        var totalOccurrences = counters[l].reduce((m,n)=>m+n,0);

        var probabilities = counters[l].map(n => n / totalOccurrences);

        sums[l] = probabilities.reduce((m,p)=>m+(p*p), 0);
    });

    var largestSum = { len: 0, val: 0.00 };

    console.log(sums);

    for(var s in sums)
        (sums[s] > largestSum.val) && (largestSum.val = sums[s]) && (largestSum.len = s);

    console.log("Length " + largestSum.len + " has the largest sum of squared probabilities (" + largestSum.val + ").");
    console.log("This is likely to be nonuniform, and therefore the correct key length.\n");

    return largestSum.len;
}



