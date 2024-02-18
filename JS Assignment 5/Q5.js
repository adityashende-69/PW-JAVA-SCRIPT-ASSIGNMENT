function calculateDelivaryTime(packageType){
    let estimateTime;

    switch (packageType.toLowerCase()){
        case "standard":
            estimateTime = "3-5 days";
        break;
        case "express":
            estimateTime = "1-2 days";
        break;
        case "ovwenight":
        estimateTime = "next day";
        break;
        default:
        estimateTime = "not available"
    }

    console.log(`Estimate delivary time for ${packageType} package: ${estimateTime}`);
}
calculateDelivaryTime("standard");
calculateDelivaryTime("express");
calculateDelivaryTime("overnight");
calculateDelivaryTime("unknown");