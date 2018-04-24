// Browser environment
if(typeof window !== 'undefined') {
    Accounts = (typeof window.Accounts !== 'undefined') ? window.Accounts : require('happyucjs-accounts');
}


// Node environment
if(typeof global !== 'undefined') {
    Accounts = (typeof global.Accounts !== 'undefined') ? global.Accounts : require('happyucjs-accounts');
}