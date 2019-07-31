
// this file has functions that will figure out what to reply to the user's messages




function botReply(userMessage) {
    const commonReplies = {
        "scoops ahoy": "Scoops ahoy!",
        "where are you located": "Starcourt mall, Hawkins Indiana",
        "where are you found": "Starcourt mall, Hawkins Indiana",
        "what do you think about kids?": [
            "Turns out I'm a pretty damn good babysitter.",
            "Man, kids are the worst! Who needs 'em, anyway?",
            "Kids? What Kids"
        ]
    };
    let zipMatch = "Is there Ice Cream in xxxxx".toLowerCase();
    // zipMatch.slice(0, -6) === userMessage.toLowerCase().slice(0, -6)
    if (userMessage.toLowerCase() in commonReplies) {
        if (Array.isArray(commonReplies[userMessage])) {
            return commonReplies[userMessage][Math.floor(Math.random() * 3)];
        } else {
            return commonReplies[userMessage]
        }
    } else if (userMessage.toLowerCase().includes('ice cream') && !isNaN(userMessage.toLowerCase().slice(-5))) {

                    
            fetch('https://api.foursquare.com/v2/venues/explore?client_id=WND4VTUYZXZ3QMEB213BRXXYQ2M5PPX2EI14VXAUTDAFJPN3&client_secret=R4YVYB1H1QZUC1AC4OIPLKLVGV3G25SBGPHZWZB0PAFPOKMC&v=20180323&near=11230&query=[ice cream]&radius=250')
            .then(res => res.json())
            .then(data => {
                // data.response.groups
                data.response.groups[0].items.forEach(e => {
                    // e.venue.name, .formattedAddress
                    debugger
                    let val = `Ice Cream Shop: ${e.venue.name} at ${e.venue.location.formattedAddress[0], e.venue.location.formattedAddress[1], e.venue.location.formattedAddress[2]}`;
                    return val;
                });
            })
            .catch(error => console.log(error));
            
    } else {
        return "Yeah, that's a no, sorry.";
    }
}

// “Scoops ahoy”: Scoops ahoy!
//  “Where are you located/found?”: Starcourt mall, Hawkins Indiana
//  “What do you think about kids?” Replies with one of -
// 
//  Turns out I'm a pretty damn good babysitter.
//  Man, kids are the worst! Who needs 'em, anyway?
// “Is there Ice Cream in <ZIP>?”:
// 
// Providing a valid nyc zipcode. Your node server should iterate the
// output from ​ https://project.wnyc.org/ice-cream/data/places.json​ and
// return any Business Results that have that zip code in the address.
// 
// A Nice to have would be to use the ​ foursquare api​ to do this. That way
// it would support more than NYC.
// 
// Default case on errors or unknown input: “Yeah, that's a no.”

module.exports = {botReply};