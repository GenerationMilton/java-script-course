/*
Transaction analysis
Imagine you have a list of financial transactions and you want 
to perform various data proccessing operations.
Use the following instruccions as a guide to complete the exercise

1. Calculate Total balance :Use the reduce method to calculate
and display the total balance of all transactions.
*/

const transactions =[
    {id: 1, description:'Grocery Shopping', amount:-50},
    {id: 2, description:'Salary Deposit', amount:2000},
    {id: 3, description:'Utility Bill Payment', amount:-100},
    {id: 4, description:'Online Purchase', amount:-30},
]

//1. Calculate Total Balance
const totalBalance = transactions.reduce((acc, transactions)=> acc + transactions.amount,0)
console.log('**Exercise N1 - total balance**');
console.log('Total Balance: ', totalBalance);

/*
2. Find the Largest Transaction(income or Expense): Utilize the
reduce method to find the transaction with the largest amount(either 
income or expense) and display it in the console.
*/

const largestTransaction = transactions.reduce((maxTransaction, transaction)=>{
    return Math.abs(transaction.amount) >
    Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0]);

console.log('**Exercise N2 - largest Transaction**');
console.log('Largest Transaction: ', largestTransaction);

/*
3. Filter Purchase Transaction:
Use the filter method to obtain and display in the console only the purchase 
transactions(with negative amounts)
*/

const purchaseTransactions= transactions.filter(transaction=>transaction.amount <0)
console.log('**Exercise N3 - negative transactions**');
console.log('Purchase transactions',purchaseTransactions);

/**
 4. Find a Transaction by Description
 Use the find method to search and display in the console a specific transaction by its description.
 */

const specificTransaction = transactions.find(transaction => transaction.description == 'Online Purchase')
console.log('**Exercise N4 - transactions by description**');
console.log('Specific transaction',specificTransaction);

 /*
 5. Find the index of a Transaction by amount 
 Employ the findIndex method to find and display in the console the index of a specific transaction
 by its amount.
 
 */

 const indexTransactionWithAmount= transactions.findIndex(transaction => transaction.amount === -30);
 console.log('**Exercise N5 - index transactions by amount**');
 console.log('Index Transactions With Amount -30',indexTransactionWithAmount);

 /*
 6. Update Transaction Descriptions: Use the forEach method
 to update the descriptions of transactions.
 Add the prefix "Expense:" to transactions with negative amounts
 and "Income:" to transactions with positive amounts. Display the 
 updated transaction in the console.
 Remember the adapt and combine these operations as needed.
 */

 transactions.forEach(transaction => {
    if(transaction.amount < 0){
        transaction.description = `Expense: ${transaction.description}`
    }else{
        transaction.description = `Income: ${transaction.description}`
    }
 });

 console.log('Updated transactions', transactions);