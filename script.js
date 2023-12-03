function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value;
  if (message !== "") {
    const chatBox = document.getElementById("chat-box");
    const userMessage = `<div class="chat-message">>>YOU: ${message}</div>`;
    let botMessage = '';

    if (message.toLowerCase() === "hello") {
      botMessage = `<div class="chat-message bot">FRIDAY: Hello there!This is FRIDAY.</div>`;
    } else if (message.toLowerCase() === "how are you?") {
      botMessage = `<div class="chat-message bot">FRIDAY: I'm doing fine, thank you!</div>`;
    } 
    else if (message.toLowerCase() === "i love you") {
      botMessage = `<div class="chat-message bot">FRIDAY: REALLY! I 2 love you very much.</div>`;
    }
    else if (message.toLowerCase() === "what am i studying?") {
      botMessage = `<div class="chat-message bot">FRIDAY: Your are studying software engineering in Mtech Integrated.</div>`;
    }
    else if (message.toLowerCase() === "who created you") {
      botMessage = `<div class="chat-message bot">FRIDAY: MY GOD YASHWANTH CREATED ME!</div>`;
  }
  else if (message.toLowerCase() === "friends") {
    botMessage = `<div class="chat-message bot">FRIDAY: Yashwanth,gokul,uma,gnanith,prasad,lokesh,deepthi,rishitha these people are your friends.</div>`;
}
else if (message.toLowerCase() === "who is gokul") {
  botMessage = `<div class="chat-message bot">FRIDAY: gokul is no 1 thikkanakoduku</div>`;
}
else if (message.toLowerCase() === "who is gnanith") {
  botMessage = `<div class="chat-message bot">FRIDAY: gnanith is no 2 mentalodu</div>`;
}
else if (message.toLowerCase() === "who is lokesh") {
  botMessage = `<div class="chat-message bot">FRIDAY: lokesh katha veru le</div>`;
}
else if (message.toLowerCase() === "monday shedule") {
  botMessage = `<div class="chat-message bot">FRIDAY: maths,humanity,sts,physics,english lab,inka afternoon free free</div>`;
}
else if (message.toLowerCase() === "tuesday shedule") {
  botMessage = `<div class="chat-message bot">FRIDAY: physics,kali,french,kali,afternnon lunch tharuvatha cse lab vundhi</div>`;
}
else if (message.toLowerCase() === "wednesday shedule") {
  botMessage = `<div class="chat-message bot">FRIDAY: direct 2nd hour maths,humanity,sts,afternoon mat lab</div>`;
}
else if (message.toLowerCase() === "thursday shedule") {
  botMessage = `<div class="chat-message bot">FRIDAY: (full tight)sts,phy,kali,python,english lab,after lunch python lab</div>`;
}
else if (message.toLowerCase() === "friday shedule") {
  botMessage = `<div class="chat-message bot">FRIDAY: french,kali,maths,humanity,after lunch physics lab</div>`;
}
else if (message.toLowerCase() === "saturday shedule") {
  botMessage = `<div class="chat-message bot">FRIDAY: yemo sir nak kanapadadhu</div>`;
}
else if (message.toLowerCase() === "sunday shedule") {
  botMessage = `<div class="chat-message bot">FRIDAY: fandagowwwww</div>`;
}
else if (message.toLowerCase() === "no 1 erripuku") {
  botMessage = `<div class="chat-message bot">FRIDAY: gokul gokul gokul !!</div>`;
}
else if (message.toLowerCase() === "ntr") {
  botMessage = `<div class="chat-message bot">FRIDAY: prasad</div>`;
}
else if (message.toLowerCase() === "1105") {
  botMessage = `<div class="chat-message bot">FRIDAY: Sodanapalli Yashwanth Reddy</div>`;
}
else if (message.toLowerCase() === "1112") {
  botMessage = `<div class="chat-message bot">FRIDAY: Pinupolu Gokul</div>`;
}
else if (message.toLowerCase() === "1127") {
  botMessage = `<div class="chat-message bot">FRIDAY: Uma Maheshwari</div>`;
}
else if (message.toLowerCase() === "1154") {
  botMessage = `<div class="chat-message bot">FRIDAY: Papara deepthi</div>`;
}
else if (message.toLowerCase() === "instagram") {
  botMessage = `<div class="chat-message bot">FRIDAY: https://www.instagram.com/</div>`;
}
else if (message.toLowerCase() === "1113") {
  botMessage = `<div class="chat-message bot">FRIDAY: Pathi Gnanith</div>`;
}
else if (message.toLowerCase() === "1102") {
  botMessage = `<div class="chat-message bot">FRIDAY: NTR</div>`;
}
else if (message.toLowerCase() === "1136") {
  botMessage = `<div class="chat-message bot">FRIDAY: Chithirala Lokesh</div>`;
}
else if (message.toLowerCase() === "gokul videos yekkadi varaku vasthunnai") {
  botMessage = `<div class="chat-message bot">FRIDAY: modda varaku vasthunnai</div>`;
}
else if (message.toLowerCase() === "bye") {
  botMessage = `<div class="chat-message bot">FRIDAY: bye bye</div>`;
}
else if (message.toLowerCase() === "pora") {
  botMessage = `<div class="chat-message bot">FRIDAY: godha lanja kodaka</div>`;
}
else if (message.toLowerCase() === "manchi dailouge cheppu") {
  botMessage = `<div class="chat-message bot">FRIDAY: adavullo getla puttindra yem ra manchi maryadh thelvadh</div>`;
}
else if (message.toLowerCase() === "uma") {
  botMessage = `<div class="chat-message bot">FRIDAY: varety candidate</div>`;
}
else if (message.toLowerCase() === "deepthi") {
  botMessage = `<div class="chat-message bot">FRIDAY: bhagha rich</div>`;
}
else if (message.toLowerCase() === "yashwanth") {
  botMessage = `<div class="chat-message bot">FRIDAY: chala manchodu</div>`;
}
else if (message.toLowerCase() === "gokul lover") {
  botMessage = `<div class="chat-message bot">FRIDAY: dimpul</div>`;
}
else if (message.toLowerCase() === "gnanith lover") {
  botMessage = `<div class="chat-message bot">FRIDAY: medha</div>`;
}
else if (message.toLowerCase() === "prasad lover") {
  botMessage = `<div class="chat-message bot">FRIDAY: priya....</div>`;
}
else if (message.toLowerCase() === "yashwanth lover") {
  botMessage = `<div class="chat-message bot">FRIDAY: thappu mawa paddhathi kadhu</div>`;
}
else if (message.toLowerCase() === "lokesh lover") {
  botMessage = `<div class="chat-message bot">FRIDAY: yemo sir nak kanapadadhu,amit ani anukuntunna</div>`;
}
else if (message.toLowerCase() === "gokul okade room lo vunte em chesthadu") {
  botMessage = `<div class="chat-message bot">FRIDAY: warden madda gudusthadu,kottukuntadu</div>`;
}
else if (message.toLowerCase() === "good morning") {
  botMessage = `<div class="chat-message bot">FRIDAY: shubhodhayam ra</div>`;
}
else if (message.toLowerCase() === "good afternoon") {
  botMessage = `<div class="chat-message bot">FRIDAY: eyyy po</div>`;
}
else if (message.toLowerCase() === "good night") {
  botMessage = `<div class="chat-message bot">FRIDAY: sar paduko inka yemundhile</div>`;
}
else if (message.toLowerCase() === "yekkadiki povalabba?") {
  botMessage = `<div class="chat-message bot">FRIDAY: kompaku po!</div>`;
}
else if (message.toLowerCase() === "rcb cup kodthadha?") {
  botMessage = `<div class="chat-message bot">FRIDAY: yemo sir nak kanapadadhu</div>`;
}
else if (message.toLowerCase() === "gokul ki yevari meedha moju?") {
  botMessage = `<div class="chat-message bot">FRIDAY: yemo!french anukuntunna</div>`;
}
else if (message.toLowerCase() === "prasad ammaila tho yendhuku matladadu?") {
  botMessage = `<div class="chat-message bot">FRIDAY: yemo sir nak vinapadadhu</div>`;
}
else if (message.toLowerCase() === "shathaghanikodukulu ante yevaru?") {
  botMessage = `<div class="chat-message bot">FRIDAY: gokul</div>`;
}
else if (message.toLowerCase() === "gnanith crush yevaru?") {
  botMessage = `<div class="chat-message bot">FRIDAY: manchi maryadha thelvadha ra?</div>`;
}
else if (message.toLowerCase() === "gokul ki yentha mandhi lovers?") {
  botMessage = `<div class="chat-message bot">FRIDAY: hey question thappu ra!gokul ki yentha mandhi husbands ani vundali,the answer is 5</div>`;
}
else if (message.toLowerCase() === "gokul pilla peru?") {
  botMessage = `<div class="chat-message bot">FRIDAY: sorry!vadi husband peru mathram govindarajan</div>`;
}
else if (message.toLowerCase() === "hi") {
  botMessage = `<div class="chat-message bot">FRIDAY: nak neetho chatting interest ledhu</div>`;
}
else if (message.toLowerCase() === "") {
  botMessage = `<div class="chat-message bot">FRIDAY: </div>`;
}
else if (message.toLowerCase() === "thinnava?") {
  botMessage = `<div class="chat-message bot">FRIDAY: ha !nuvvu thinnava?</div>`;
}
else if (message.toLowerCase() === " ha thinna") {
  botMessage = `<div class="chat-message bot">FRIDAY: ha ok</div>`;
}
else if (message.toLowerCase() === "thankyou") {
  botMessage = `<div class="chat-message bot">FRIDAY: welcome!</div>`;
}
else if (message.toLowerCase() === "yelavunnav") {
  botMessage = `<div class="chat-message bot">FRIDAY: bhalenu</div>`;
}
else if (message.toLowerCase() === "behaviour?") {
  botMessage = `<div class="chat-message bot">FRIDAY: his behaviour is very bad,penda</div>`;
}
else if (message.toLowerCase() === "are you ok?") {
  botMessage = `<div class="chat-message bot">FRIDAY: fine</div>`;
}
else if (message.toLowerCase() === "iam feeling sad") {
  botMessage = `<div class="chat-message bot">FRIDAY: address pettuuu na kodaka</div>`;
}
else if (message.toLowerCase() === "exam pass avthana") {
  botMessage = `<div class="chat-message bot">FRIDAY: yemo aa shivayyake thelusu</div>`;
}
else if (message.toLowerCase() === "physics important questions for fat") {
  botMessage = `<div class="chat-message bot">FRIDAY: wave equation,wave equation verification problems,reflection and transmission coefficient(only formulas,standing wave equation very important,line,surface,volume integrals vunna leka poyyina okate,Maxwells equation differential and integral form,em wave interms of elctric field and magnetic field,compton effect formula and definition,davisson and german experiment postulates,observations,tunneling effect,weins displacement law,stephen boltz man law,debroglie and braggs laws,schrodinger wave equation very very important brotheru!,particle in 1 d box lo okkate derivation vundhi adhi nerchuko,einsteins coefficients derivation,population inversion definition,HE-NE laser,co2 laser,NDYAG laser just chuskondi backup plan lagha!,fiber optics lo definitions and formulas anthe...</div>`;
}
else if (message.toLowerCase() === "physics m1 important questions") {
  botMessage = `<div class="chat-message bot">FRIDAY: wave equation,wave equation verification problems,reflection and transmission coefficient(only formulas,standing wave equation very important</div>`;
}
else if (message.toLowerCase() === "physics m2 important questions") {
  botMessage = `<div class="chat-message bot">FRIDAY: surface,volume integrals vunna leka poyyina okate,Maxwells equation differential and integral form,em wave interms of elctric field and magnetic field</div>`;
}
else if (message.toLowerCase() === "physics m3 important questions") {
  botMessage = `<div class="chat-message bot">FRIDAY: compton effect formula and definition,davisson and german experiment postulates,observations,tunneling effect,weins displacement law,stephen boltz man law,debroglie and braggs laws,schrodinger wave equation very very important brotheru!</div>`;
}
else if (message.toLowerCase() === "physics m4 important questions") {
  botMessage = `<div class="chat-message bot">FRIDAY: particle in 1 d box lo okkate derivation vundhi adhi nerchuko</div>`;
}
else if (message.toLowerCase() === "physics m5 important questions") {
  botMessage = `<div class="chat-message bot">FRIDAY: einsteins coefficients derivation,population inversion definition,HE-NE laser,co2 laser,NDYAG laser just chuskondi backup plan lagha!</div>`;
}
else if (message.toLowerCase() === "physics m6 important questions") {
  botMessage = `<div class="chat-message bot">FRIDAY: fiber optics lo definitions and formulas anthe...</div>`;
}
else if (message.toLowerCase() === "boothulu nerpinchu") {
  botMessage = `<div class="chat-message bot">FRIDAY: nerpinchanu nenu neeku,malli chedipothav ra! groundfloor muskoni po raa...</div>`;
}


    else {
      botMessage = `<div class="chat-message bot">FRIDAY: nak thelvadh</div>`;
    }

    chatBox.innerHTML += userMessage;

    setTimeout(() => {
      chatBox.innerHTML += botMessage;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // Simulate bot response delay

    userInput.value = "";
  }
}
