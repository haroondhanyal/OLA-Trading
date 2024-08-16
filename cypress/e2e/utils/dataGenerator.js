import { faker } from '@faker-js/faker';

const getRandomDateBetween = (startDate, endDate) => {
    const start = startDate.getTime();
    const end = endDate.getTime();
    const randomTime = Math.random() * (end - start) + start;
    return new Date(randomTime);
};

// Function to format the date as MM/DD/YYYY
// const formatDate = (date) => {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//     const year = date.getFullYear();
//     return `${month}/${day}/${year}`;
// };


export const generatePersonalInfoData=()=>{
    const now = new Date();
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(now.getFullYear() - 18);

    const thirtyYearsAgo = new Date();
    thirtyYearsAgo.setFullYear(now.getFullYear() - 30);

    const dob = formatDate(getRandomDateBetween(thirtyYearsAgo, eighteenYearsAgo));

    const noOfDependents = faker.number.int({ min: 1, max: 99 }).toString().padStart(2, '0');

    const primaryTelephone = faker.phone.number('###########').padStart(15, '0');
    const workTelephone = faker.phone.number('###########').padStart(15, '0');
    const securityNumber = faker.phone.number('###########').padStart(9, '0');
    const idNumber = faker.phone.number('###########').padStart(17, '0');
    return{
        fName: faker.name.firstName(),
        mName: faker.name.middleName(),
        lName: faker.name.lastName(),
        nOfDependents: noOfDependents,
        membersEmail: faker.internet.email(),
        primaryTelephone: primaryTelephone, 
        workTelephone:workTelephone,
        socialSecNumber:securityNumber,
        IdNumber:idNumber,
        dob: dob, 
        // address1: faker.address.streetAddress(),
        // address2: faker.address.secondaryAddress(),
        // city: faker.address.city(),
        // state: faker.address.state(),
        // zipCode: faker.address.zipCode(),
        // referralSource: faker.company.bsAdjective(), 
        // primaryInterests: faker.lorem.words(3)
    }
}