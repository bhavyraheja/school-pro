export function generateRegistrationNumber(schoolCode: string, sponsorshipType: "PS" | "SS", sequence:number):string{
    // const{
    //     schoolCode = "BU" ,
    //     sponsorshipType,
    //     sequence
    // } = options;

    if (sequence < 1 || sequence > 9999){
        throw new Error('Sequence number must be between 1 and 9999');
    }

    const paddedSequence = sequence.toString().padStart(4,'0');
    const registrationNumber = `${schoolCode}/${sponsorshipType}/${year}/${paddedSequence}}`;
    return registrationNumber;
}
