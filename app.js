// const cleanDataFilterTypeMer = 'merchandising';
// const cleanDataFilterTypeExp = 'experience';
// let cleanDataFilterType = "";

// const filterTypeMatch = function (filterTypeVar = "", filterTypeOffer = "") {
//   const filterTypeVarArray = [];
//   filterTypeVarArray.push(...filterTypeVar.match(/.{1,4}/g), ...filterTypeVar.match(/.{1,4}(?=(.{4})*$)/g));
//   filterTypeVarArray.push(...filterTypeVar.match(/.{1,3}/g), ...filterTypeVar.match(/.{1,3}(?=(.{3})*$)/g));
//   const filterType = filterTypeVarArray.some(el => {
//     if (el.length == 3 || el.length == 4) {
//       if (filterTypeOffer.includes(el) && filterTypeVar !== filterTypeOffer) {
//         return true;
//       }
//     }
//   });
//   return filterType;
// }

// const filterType = String('exp123213').toLowerCase();

// if(!!cleanDataFilterTypeMer && filterTypeMatch(cleanDataFilterTypeMer.toLocaleLowerCase(), filterType))
//   cleanDataFilterType = cleanDataFilterTypeMer;
// if(!!cleanDataFilterTypeExp && !cleanDataFilterType && filterTypeMatch(cleanDataFilterTypeExp.toLocaleLowerCase(), filterType))
//   cleanDataFilterType = cleanDataFilterTypeExp;

// if (!!cleanDataFilterType) {
//   console.log(JSON.stringify({
//     "test1": "Test 1",
//     "filter_type": cleanDataFilterType,
//     "test2": "Test 2",
//   }))
// } else {
//   console.log(JSON.stringify({
//     "test1": "Test 1",
//     "test2": "Test 2",
//   }))
// }

// const offersIdsProcessed = [];
// offersIdsProcessed.push('1');
// offersIdsProcessed.push('2');
// offersIdsProcessed.push('3');
// offersIdsProcessed.push('4');
// offersIdsProcessed.push('5');

//console.log('offersIdsProcessed *** ', !offersIdsProcessed.find((id) => id === '4'));

// let cadena = "( '(', ')' '[', ']', '{', '}' )"

// //console.log(eval(cadena))

// const test = (test) => {

//   if (!test) return false

//   let test2 = test.split(' ')

//   let parentabren = []
//   let parencierre = []

//   test2.map((a) => {

//       if (a.includes('(') || a.includes('{') || a.includes('[')) {
//         parentabren.push(a)
//       }
//       else if (a.includes(')') || a.includes(']') || a.includes('}')) {

//         if (parentabren.pop() == '(' && !a.includes(')')) {
//           console.log(a ,' *** ', !a.includes(')'))
//           return false
//         }

//         else if (parentabren.pop() == '{' && !a.includes('}')) {
//           return false
//         }

//         else if (parentabren.pop() == '[' && !a.includes(']')) {
//           return false
//         }

//       }

//   })

//   return true
// }

// console.log(test(cadena))

// *****************

// let test = 'RewardsConsumerBirthday'

// switch (test) {
//   case 'RewardsConsumerAnniversary':
//   case 'RewardsConsumerBirthday':
//     console.log(test);
//     break;
//   case '':
//     console.log("goodbye");
//     break;
//   default:
//     console.log("ninguno");
//     break;
// }

let userIdSessionm = { title: "Home MX", sections: ["test", "test 2"] };
let search_drupal_mock;

if (!userIdSessionm.sections) {
  userIdSessionm = null;
  search_drupal_mock = "entro";
}

console.log({
  statusCode: 201,
  body: JSON.stringify({
    title: "Home MX",
    sections: userIdSessionm?.sections || search_drupal_mock,
  }),
});
