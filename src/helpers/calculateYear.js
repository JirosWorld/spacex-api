function calculateYear() {
    const date = new Date();
    // SpaceX oprichtingsdatum: 14 maart 2002
    const foundingYear = 2002;
    const currentYear = date.getFullYear();
    return (currentYear - foundingYear).toString();
}

export default calculateYear;