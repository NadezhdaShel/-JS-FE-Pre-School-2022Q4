const getTimeOfDay = (hours) => {
    const p = ["night", "morning", "afternoon", "evening"];
    return p[Math.floor(hours / 6)];
}

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export {
    getTimeOfDay,
    getRandom,
};



