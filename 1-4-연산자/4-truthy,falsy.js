
//  truthy, falsy : js는 논리가 아닌 데이터를 논리로 표현할 수 있다
// 0, '', null, undefined, Nan  false 취급. 나머지는 true

if (100) console.log('참');
if (-99) console.log('참');
if ('') console.log('참');
if (undefined) console.log('참');
if (NaN) console.log('참');
if (null) console.log('참');
