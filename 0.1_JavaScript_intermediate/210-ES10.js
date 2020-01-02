//FLAT
const array = [1, 2, 3, 4, 5];
array.flat()

const array2 = [1, [2, 3], [4, 5]];
array2.flat();

const array3 = [1, 2, [3, 4, [5]]]
array3.flat();
array3.flat(2);

//FLATMAP
const addedArray2 = array2.flatMap(each => {
    return each + 1;
})


const entries = ['bob', 'sally',,,,,,'Cindy'];
entries.flat();


userEmail = '              eddytheeagle@gmail.com';
userEmail2 = 'johnydangerous@gmail               ';
userEmail3 = '               johnydangerous@gmail               ';
userEmail.trimStart();
userEmail2.trimEnd();
userEmail3.trimStart().trimEnd();

//FORM ENTRIES

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
Object.fromEntries(userProfiles);

//TRY...CATCH

try {
    bob + 'he'
} catch (error){
    console.log('you messed up!' + error);
}