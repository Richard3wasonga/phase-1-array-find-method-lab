function superbowlWin(record){
    const win = record.find(item => item.year === "2015");
    return win ? win.year : undefined;
}