function checkVotingEligibility(age)
{
    const message = age < 18 ? 
    "you cannot vote" : "you can vote";
    console.log(message);
}

checkVotingEligibility(23);
checkVotingEligibility(15);