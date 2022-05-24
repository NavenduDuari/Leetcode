/**
 * @param {string} expression
 * @return {number[]}
 */

// const calc = (a, op, b) => {
//     if (op === '+') return a+b;
//     if (op === '-') return a-b;
//     if (op === '*') return a*b;
// };

// const isOperator = (ch) => {
//     return (ch === '+' || ch === '-' || ch === '*');
// }

// const solve = (res, expression) => {
//     console.log('solve::', expression)
//     if (isNaN(Number(expression))) {
//         for (let i = 0; i < expression.length; i++) {
//             if (isOperator(expression[i])) {
//                 console.log('operator::', expression[i])
//                 const a = Number(expression[i-1]);
//                 const b = Number(expression[i+1]);
//                 const op = expression[i];
//                 const x = calc(a, op, b);
//                 let newExp = [...expression];
//                 newExp.splice(i-1,3,x);
//                 solve(res, newExp);
//             }
//         }
//     } else {
//         console.log('pusing::', expression)
//         res.push(Number(expression));
//         return;
//     } 
// };
// var diffWaysToCompute = function(expression) {
//     const res = [];
//     solve(res, expression.split(''));

//     return res;
// };

var diffWaysToCompute = function(expression) {
    let res = [];
    for (let i = 0; i < expression.length; i++) {
        if (isNaN(expression[i])) {
            const left = diffWaysToCompute(expression.slice(0, i));
            const right = diffWaysToCompute(expression.slice(i+1));
            
            for (let x of left) {
                for (let y of right) {
                    x = Number(x);
                    y = Number(y);
                    
                    if (expression[i] === '+') res.push(x+y);
                    if (expression[i] === '-') res.push(x-y);
                    if (expression[i] === '*') res.push(x*y);
                }
            }
        }
    }
    
    if (res.length) return res;
    
    return [expression];
}