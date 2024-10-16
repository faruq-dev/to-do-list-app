export const getLocalStorageData = () =>{
    const tasks = localStorage.getItem('tasks');
    return JSON.parse(tasks) || []; // যদি লোকাল স্টোরেজে tasks নামে কিছু না পায় তাহলে একটা empty array রিটার্ন করার জন্য || [] লিখলাম
};

export const getThemeData = () =>{
    const theme = localStorage.getItem('theme');
    return theme || 'dark';
};