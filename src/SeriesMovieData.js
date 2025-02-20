import BB from './SeriesImages/BB.jpg';

const SeriesMovieData = [
  {
    id: 1,
    Sname: "Breaking Bad",
    Genre: "Crime",  
    img: BB,
    Seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: 101, name: "Episode 1 - Pilot", description: "Walter White is a high school chemistry teacher who learns that he has lung cancer. With a new lease of life, Walter sets up a mobile meth lab with a former student and becomes a drug dealer in order to secure his family's financial security.", videoUrl: "https://drive.google.com/file/d/133KyJmiyECGwemHyuIohl-62fzAXJjkL/preview" },
          { id: 102, name: "Episode 2 - The cat's in the Bag", description: "Following their debacle in the desert, Walter and Jesse are left with a mess to dispose of. Later, Skyler grows suspicious of Walt's recent activity.", videoUrl: "https://drive.google.com/file/d/12wCfXjE2eNIlanU-AtZ9ScBEkTNGuVYG/preview" },
          { id: 103, name: "Episode 3 - And the Bag's in the River", description: "Following an argument with Jesse, Walter is left to deal with Krazy-8 alone. After Marie raises concerns that Walt Jr is smoking cannabis, Hank shows him the dangers of drug use.", videoUrl: "https://drive.google.com/file/d/14IkCN6SZ04SmrKIAjI1yXqCB9zVRhZZn/preview" },
          { id: 104, name: "Episode 4 - Cancer Man", description: "The DEA becomes suspicious of a new drug kingpin. Walt reveals that he has cancer to Marie and Hank. Elsewhere, Jesse visits his estranged family.", videoUrl: "https://drive.google.com/file/d/13gsPozn4HnCM9HfzotYLmiaYv-aCJ3KR/preview" },
          { id: 105, name: "Episode 5 - Gray Matter", description: "Walter and Skyler attend a former colleague's party, Jesse tries to free himself from the drugs, and Skyler organises an intervention for Walt.", videoUrl: "https://drive.google.com/file/d/14Kakrj8TR-lo0lG4jzt1j5Qw7Gjhhi6b/preview" },
          { id: 106, name: "Episode 6 - crazy handful of Nothin'", description: "The side-effects of chemotherapy begin to plague Walt, who is also cooking meth again, and Jesse's friend, Skinny Pete, introduces him to a distributor named Tuco, but things go awry and Jesse ends up hospitalised.", videoUrl: "https://drive.google.com/file/d/14JtQagbEjbKjWfmikfq1Q8S2x0QQdMYF/preview" },
          { id: 107, name: "Episode 7 - A No-Rough-Stuff-Type Deal", description: "Walter accepts his new identity as a drug dealer after a PTA meeting. Elsewhere, Jesse decides to put his aunt's house on the market, and Skyler is the recipient of a baby shower.", videoUrl: "https://drive.google.com/file/d/1AgEaRHoGh4B8BFXebuslPLbOvzNOerVq/preview" },
        ],
      }, 
      {
        seasonNumber: 2,
        episodes: [
          { id: 201, name: "Episode 1 - Seven Thirty-Seven", description: "Walt and Jesse are trying to work out a way of ending their partnership with Tuco. Elsewhere, Hank tries to mend fences between Marie and Skyler.", videoUrl: "https://drive.google.com/file/d/1B59s_RuUusw1eJElP5zpzKX8noimQSBY/preview" },
          { id: 202, name: "Episode 2 - Grilled", description: "With Walt and Jesse kidnapped and being held captive by a crazed Tuco, Marie and Hank try to comfort Skyler over Walt's disappearance. Later, Hank pays a visit to Mrs Pinkman.", videoUrl: "https://drive.google.com/file/d/1B5Y0MaISH2gRGP3_orBPj-4b6GB_YKNR/preview" },
          { id: 203, name: "Episode 3 - Bit by a Dead Bee", description: "Walt and Jesse's respective financial situations start to suffer when they try to cover their tracks. Meanwhile, the DEA gets a break in its meth investigation that could lead agents straight to Walt and Jesse.", videoUrl: "https://drive.google.com/file/d/1BDFt1CN9ac0AAF3gR-1vJOMPiqk1KMPX/preview" },
          { id: 204, name: "Episode 4 - Down" , description: "Walt and Jesse appear to be in the clear, but now face trouble on their respective home fronts. Walt finds it's difficult to reconnect with Skyler and the rest of his family, while Jesse's parents kick him out of their house.", videoUrl: "https://drive.google.com/file/d/1BFkECpsc4TKIF9A_Q0FFjBq6fWwoGu2_/preview" },
          { id: 205, name: "Episode 5 - Breakage", description: "As tensions continue to mount in the White household, Hank suffers from the aftermath of his encounter with Tuco. Elsewhere, Jesse puts a crew together in order to get their product out on the streets.", videoUrl: "https://drive.google.com/file/d/1BI8vLMwySXwNhPGYXa7TFx37qt1iMrKi/preview" },
          { id: 206, name: "Episode 6 - Peekaboo", description: "Walt returns to work, but finds things don't go as smoothly as he'd like when Skinny Pete gets ripped off by a drug-addicted couple. Meanwhile, Skyler thanks Gretchen for paying for Walt's treatment.", videoUrl: "https://drive.google.com/file/d/1BqcOTMNhNNcMJIsquhySRnZpUwoeYI3g/preview" },
          { id: 207, name: "Episode 7 - Negro y Azul", description: "Jesse's new reputation as a killer means he and Walt are having no trouble collecting payment, so the duo discuss expanding into new territories. Meanwhile, Hank is struggling to fit in, and Skyler spies a new job opportunity.", videoUrl: "https://drive.google.com/file/d/1BrYb14o70Ccucx0khYNXHFpjuZWNlgjM/preview" },
          { id: 208, name: "Episode 8 - Better call Saul", description: "When Badger gets into trouble with the law, Walt and Jesse seek advice from a shady attorney. Elsewhere, the DEA agents believe they have finally caught up with Heisenberg.", videoUrl: "https://drive.google.com/file/d/1Bwy8fEcj4B8IsEkrRRZ6WVsRtUB9ocdZ/preview" },
          { id: 209, name: "Episode 9 - 4 Days out", description: "Walt undergoes scans after becoming convinced that his health is deteriorating. Meanwhile, Jesse's relationship with Jane is put on hold when he and Walt head into the desert for a marathon meth-cooking session.", videoUrl: "https://drive.google.com/file/d/1CMMJdexsDUGtuPlYV89tkH_pexFz232W/preview" },
          { id: 210, name: "Episode 10 - Over", description: "Walt and Hank get into a heated argument at a party, Skyler opens up to her boss, and Jane tries to hide her relationship with Jesse from her father.", videoUrl: "https://drive.google.com/file/d/1CjWfMqGzl7aEBXB_3WXp7iT2bp36jR2K/preview" },
          { id: 211, name: "Episode 11 - Mandala", description: "Saul proposes a new business partner for Walt and Jesse, Skyler makes a shocking discovery at work, and Jesse opens up, telling recovering addict Jane what he does for a living.", videoUrl: "https://drive.google.com/file/d/1CX2GcCK2W7yP4javS4B2GNQ_wVT_33hc/preview" },
          { id: 212, name: "Episode 12 - Phoenix", description: "The Whites welcome a new addition; Walter Jr. launches a new website; Jesse's addiction begins to get out of control; Jane and Jesse's relationship causes friction with both Walt and Donald.", videoUrl: "https://drive.google.com/file/d/1CX2GcCK2W7yP4javS4B2GNQ_wVT_33hc/preview" },
          { id: 213, name: "Episode 13 - ABQ", description: "Walt's lies start to unravel, and Skyler's frustration with his secrecy finally comes to a head. Meanwhile, Jesse self-destructs when Jane overdoses and Donald's grief leads to tragedy.", videoUrl: "https://drive.google.com/file/d/1KO__3C32sWY7fGyfDU2ZC8vRfMxXlKPM/preview" },
        ],
      },
      {
        seasonNumber: 3,
        episodes: [
          { id: 301, name: "Episode 1 - No Más", description: "In the wake of the Albuquerque airline disaster, Skyler forces Walt to move out, while Jesse's stay in drug rehab helps him come to grips with his role in the fatal mid-air collision.", videoUrl: "https://drive.google.com/file/d/1KO__3C32sWY7fGyfDU2ZC8vRfMxXlKPM/preview" },
          { id: 302, name: "Episode 2 - Caballo sin Nombre", description: "As he finds Skyler is dead set on getting a divorce, an unwitting Walt lands squarely in the crosshairs of a pair of Mexican drug cartel hit men set on revenge.", videoUrl: "https://drive.google.com/file/d/1KRc4IFrofG-IegmVl_XJukJWwUAQ6UL7/preview" },
          { id: 303, name: "Episode 3 - I.F.T.", description: "As Walt calls Skyler's bluff and moves back home without her consent, Jesse ponders re-entering the drug trade, as a Mexican cartel anxiously awaits its opportunity to get revenge for the death of one of its own.", videoUrl: "https://drive.google.com/file/d/1KSAOUeiFKYpObA7DfrWvaHgTpBxLiX0v/preview" },
          { id: 304, name: "Episode 4 - Green Light", description: "As Skyler's affair with her boss creates chaos within her fractured marriage, a new batch of meth that puts Jesse back in business inadvertently gets Walt involved, too.", videoUrl: "https://drive.google.com/file/d/1KbFA2iDtIHiiqFm2LE6wZtsxsqYBNmNK/preview" },
          { id: 305, name: "Episode 5 - Más", description: "As Skyler reconsiders her objections to him living back at home, Walt mulls over an offer to return to the drug trade; Hank's obsession with nailing Heisenberg promises trouble for Jesse.", videoUrl: "https://drive.google.com/file/d/1KkbAiNFMuO4ScJ692wdEazdQ9a-9aIaz/preview" },
          { id: 306, name: "Episode 6 - Sun Set", description: "As Walt resumes business in Gus's state-of-the-art meth lab, the discovery of their old RV forces him and Jesse to act fast to keep from being busted by Hank.", videoUrl: "https://drive.google.com/file/d/1KuM-ICz4EMrP3I7smAzOP6GcFcCQKNtk/preview" },
          { id: 307, name: "Episode 7 - One Minute", description: "Upset that his case has fallen apart as a result of the destruction of the mobile drug lab, Hank risks his career by attacking Jesse; worried that Jesse will talk, Walt offers him a chance to team up again in his new lab.", videoUrl: "https://drive.google.com/file/d/1KvkuWpmL7jUMG5kF_pIxVIsgUghCYZIj/preview" },
          { id: 308, name: "Episode 8 - I See You", description: "As Hank clings to life following the drug cartel's attempt to kill him, Walt looks to insulate himself from more trouble by taking on Jesse as a partner when he realizes that the hit men may have been after him, too.", videoUrl: "https://drive.google.com/file/d/1KxA3a3ghGk1XQJCt9WIrAJhHoRMj0KlM/preview" },
          { id: 309, name: "Episode 9 - Kafkaesque", description: "As he and Walt resume production, Jesse looks for a way to increase his take, while the prospects for Hank's recovery place Marie at odds with their insurance company.", videoUrl: "https://drive.google.com/file/d/1L-CwskF4waCVbF7RF6y9Vfh5bQEcqIDp/preview" },
          { id: 310, name: "Episode 10 - Fly", description: "Obsessed about a contaminant, Walt refuses to cook; Jesse tries to get him back on track.", videoUrl: "https://drive.google.com/file/d/1L1uKthXs4j4bDqQt9eb4qqDLzO3WsQlR/preview" },
          { id: 311, name: "Episode 11 - Abiquiu", description: "As Hank is unhappy with the pace of his recovery, and Skyler questions Saul's money-laundering scheme, Jesse falls for a fellow rehab patient who he learns is tied to the murder of his late friend, Combo.", videoUrl: "https://drive.google.com/file/d/1Ls3MSl4XTj7yhj7k7XuW-3ycDFMf59kZ/preview" },
          { id: 312, name: "Episode 12 - Half Measures", description: "Ignoring Walt's objections, Jesse goes after the drug dealers who orchestrated Combo's murder; as Hank continues to refuse to leave the hospital, Skyler presses Walt to accept her money-laundering scheme.", videoUrl: "https://drive.google.com/file/d/1--Nq7YA4Uxu0wlbg-xICTEtGmfznXjJe/preview" },
          { id: 313, name: "Episode 13 - Full Measures", description: "After taking out two of his boss's street dealers, Walt realizes that Gus is planning to kill him and Jesse and replace him with his former assistant.", videoUrl: "https://drive.google.com/file/d/1-0_K0b58TJpZ8pJlCxyMFSgUpk6ueH5I/preview" },
        ],
      },
       {
        seasonNumber: 4,
        episodes: [
          { id: 401, name: "Episode 1 - Box Cutter", description: "Walt and Jesse anxiously wait to see what their drug lord boss, Gus, will do next. Meanwhile, Skyler desperately searches for clues to Walt's activities, while Hank continues his slow, painful rehab.", videoUrl: "https://drive.google.com/file/d/1-A46IdSDekFArnC9upIyc8hu2CFnfkjy/preview"},
          { id: 402, name: "Episode 2 - Thirty-Eight Snub", description: "Walt prepares his defence against Gus, as Jesse copes by reviving his friendship with Badger and Skinny Pete. Meanwhile, as Skyler hatches a scheme of her own, her sister Marie struggles to deal with Hank's deep depression.", videoUrl: "https://drive.google.com/file/d/10kBQqICD8yJWkwiXdkWDDy8fqIzKXOFo/preview"},
          { id: 403, name: "Episode 3 - Open House", description: "While Walt worries about Gus's interference and Jesse's increasingly fragile state of mind, Skyler steps up the pressure to get what she wants.", videoUrl: "https://drive.google.com/file/d/10taZZuV4SY8RvXVe66Szg7kZronZJjHg/preview"},
          { id: 404, name: "Episode 4 - Bullet Points", description: "As Skyler concocts an elaborate story to explain their finances, Walt worries when he discovers that Hank has begun a new investigation, and Jesse's lack of interest in doing anything but partying catches Gus' attention.", videoUrl: "https://drive.google.com/file/d/10wAkkDf17FQFM5Vz21V6nJvsCNbFoX16/preview"},
          { id: 405, name: "Episode 5 - Shotgun", description: "While Walt worries that his partner is about to be killed, Jesse is with Mike on a perilous run. Meanwhile, as Walt and Skyler close the car wash deal, Hank decides to close his investigation.", videoUrl: "https://drive.google.com/file/d/116tOE-JVuvsi0fcu67joqWq6T2LYSNG0/preview"},
          { id: 406, name: "Episode 6 - Cornered", description: "When Skyler suspects that Walt isn't telling her the truth, Skyler adopts a cold and businesslike approach toward him. Meanwhile, as Gus draws him closer, Jesse proves his worth to Mike and Gus's enterprise.", videoUrl: "https://drive.google.com/file/d/11Km2F8gPobMq67yoP2L5i2TN_YWO9TOh/preview"},
          { id: 407, name: "Episode 7 - Problem Dog", description: "Walt places Skyler in a difficult spot with their new operation. And as Walt looks to protect himself against Gus, Jesse agrees to a dangerous proposition.", videoUrl: "https://drive.google.com/file/d/11W1G5puF_zP2tNUK8zEuZ82FUgcvDuRc/preview"},
          { id: 408, name: "Episode 8 - Hermanos", description: "As Hank produces evidence that Gus is Albuquerque's meth kingpin, Walt worries that both he and Jesse are going to be killed to protect their boss.", videoUrl: "https://drive.google.com/file/d/11bSxxcmS0fWfAy1EmK0E5zgbEDThAZrL/preview"},
          { id: 409, name: "Episode 9 - Bug", description: "As Walt struggles to subvert Hank's homegrown investigation into the Albuquerque meth business, a deadly warning forces Gus to consider a deal with the Mexican cartel.", videoUrl: "https://drive.google.com/file/d/11imkL095abCreDXMiakHtX8WADkK1ITJ/preview"},
          { id: 410, name: "Episode 10 - Salud", description: "As Walt is recovering from their fight, Gus takes Jesse to Mexico to seal his deal with the cartel, but as Gus unleashes his own deadly plan to retain control of his drug empire, Skyler worries when her ex-boss Ted Beneke balks at using his unexpected inheritance to pay his back taxes.", videoUrl: "https://drive.google.com/file/d/11rWU7u1pi5dQaUFeGQ1fO1_FogP-LJWD/preview"},
          { id: 411, name: "Episode 11 - Crawl Space", description: "Walt takes drastic action to protect his secret and Gus; Skyler's efforts to solve Ted's financial problems hit a wall.", videoUrl: "https://drive.google.com/file/d/1258ZyVsVW0ll0Yu8_5ZycvaH2EPbWUJW/preview"},
          { id: 412, name: "Episode 12 - End Times", description: "Hank pushes Gomez to pursue a lead, while Walt struggles to protect his family. Jesse gets alarming news.", videoUrl: "https://drive.google.com/file/d/126vTrUtoG6CFtogapGYvR1Kh7m-E_06R/preview"},
          { id: 413, name: "Episode 13 - add the url Face Off", description: "After their plan to kill Gus fails, Walt and Jesse must act fast if they are to avoid being killed in revenge.", videoUrl: "https://drive.google.com/file/d/16Sh3dw4rE4NKLoRyvJhgAPHIJxKkEblB/preview"},
        ],
      },
       {
        seasonNumber: 5,
        episodes: [
          
 { id: 501, name: "Episode 1 - Live Free or Die", description: "In the wake of Gus Fring's violent death, Walt and Jesse look to destroy the evidence of their work in the meth lab that has already been confiscated by the police.", videoUrl: "https://drive.google.com/file/d/13SYpVmuFqJFOPz5RpfXsx-Sos8wsygK5/preview" },
 { id: 502, name: "Episode 2 - Madrigal", description: "After cleaning up the final traces of evidence connecting them to the meth ring's deadly end, Walt and Jesse look to Mike to help rebuild the drug lab.", videoUrl: "https://drive.google.com/file/d/13S2F4Li0LiMT9zMaCEXzRrTdudva3WSA/preview" },
 { id: 503, name: "Episode 3 - Hazard Pay", description: "As Walt comes up with an ingenious plan for their new lab, he worries that their new partner, Mike, may be taking advantage of him and Jesse. Meanwhile, Skyler's sudden outburst at work has her sister Marie worried.", videoUrl: "https://drive.google.com/file/d/13R0tftWUbFoxsQkApnHwKLH-1Oh5nVMc/preview" },
 { id: 504, name: "Episode 4 - Fifty-One", description: "As the DEA closes in on the German company that supplied the meth lab, Walt looks to head off Skyler's efforts to have their kids removed from the house.", videoUrl: "https://drive.google.com/file/d/13Q7YPU4IU79TfZTLCzsmyj1rPwzSFuku/preview" },
 { id: 505, name: "Episode 5 - Dead Freight", description: "With a DEA investigation threatening to shut them down, Walt, Jesse and Mike devise an ingenious plan to fuel their meth lab. Meanwhile, Skyler makes her co-operation contingent on sending the kids to live with Marie and Hank.", videoUrl: "https://drive.google.com/file/d/13OVX-wh6zISXrtXEH4yJwV0YFWGsxUYu/preview" },
 { id: 506, name: "Episode 6 - Buyout", description: "Following their deadly train heist, Mike and Jesse propose selling the methylamine to a competitor and getting out of the drug business, but Walt refuses to go along.", videoUrl: "https://drive.google.com/file/d/13ao20lQv2BdtGYjLoU2cIqSvzUDKECzG/preview" },
 { id: 507, name: "Episode 7 - Say My Name", description: "As Walt unveils his new plan to keep all the hijacked chemicals and expand his business, the DEA investigation closes in on Mike.", videoUrl: "https://drive.google.com/file/d/16nZ4ZVKRr_vM51_DsOKW_3aCm0EzHdN9/preview" },
 { id: 508, name: "Episode 8 - Gliding Over All", description: "After disposing of Mike's body, Walt sets out to eliminate anyone who can tie him to the Fring investigation, and as a new global partnership makes them richer than ever, Skyler wonders how much money is enough.", videoUrl: "https://drive.google.com/file/d/13WPSbX4q8Cp9HfOQzQocJLiOZ1JsVk3b/preview" },
 { id: 509, name: "Episode 9 - Blood Money", description: "In a flashforward, Walter arrives at his abandoned house to grab the vial of ricin. In the present, Hank requests all files of the Fring case and matches the handwriting in Walter's copy of `Leaves of Grass' with Gale's handwriting.", videoUrl: "https://drive.google.com/file/d/16uAtzGzQG6DlTLllDh_J6LLow3aveXaV/preview" },
 { id: 510, name: "Episode 10 - x", description: "No Information Found", videoUrl: "https://drive.google.com/file/d/16zidXJvFhW8JWqew4Co_MJqhQPxYk3cZ/preview" },
 { id: 511, name: "Episode 11 - Confessions", description: "Jesse refuses to cut a deal with Hank, Walt's attempts to negotiate with Hank fail, and Walt uses a DVD to implicate Hank as the mastermind of the methamphetamine business.", videoUrl: "https://drive.google.com/file/d/1AxHxSVGJmXQrbpzTYvstQOAkyEeYtuRV/preview" },
 { id: 512, name: "Episode 12 - Rabid Dog", description: "Walt finds Saul's car crashed in his driveway, and his house unoccupied and doused in gasoline, so Walt leaves a message on Jesse's voice mail to meet in order to explain himself.", videoUrl: "https://drive.google.com/file/d/1776mOITBa61EeqUYIy-qUccFrZD468CS/preview" },
 { id: 513, name: "Episode 13 - To'hajiilee", description: "Walt calls Todd to negotiate a hit on Jesse, and Todd's uncle agrees on the condition that Walt cooks again for Todd to observe. Elsewhere, Hank attempts to learn the whereabouts of Walter's money through Huell.", videoUrl: "https://drive.google.com/file/d/17U8UHHUMTbcUquVJBhrG1C189EqNhbJY/preview" },
 { id: 514, name: "Episode 14 - Ozymandias", description: "Not everyone survives the gun battle in the desert; Marie tells Skyler that Walt has been arrested; Walt wants his family to flee with him.", videoUrl: "https://drive.google.com/file/d/17kShna6n2pyTZxp6fKz8mhxIWu9yXdN9/preview" },
 { id: 515, name: "Episode 15 - Granite State", description: "Walt seeks Saul's help in getting his money back; Saul urges Walt to turn himself in; Walt struggles with his new identity and his new home in New Hampshire.", videoUrl: "https://drive.google.com/file/d/17njY7kcyNenbrB5765WwRQRbt839apLL/preview" },
 { id: 516, name: "Episode 16 - Felina", description: "Walter makes one last attempt to secure his family's future, while also visiting some old enemies, during his final return to Albuquerque.", videoUrl: "https://drive.google.com/file/d/17o4WfmEB2EMZIvzpopgIgSVoFG0IgmsI/preview" },
        ],
      },
    ],
  },
  {
    id: 2,
    Sname: "Behind her Eyes",  // Corrected typo here
    Genre: "Crime",  // Corrected typo here
    img: haha,
    Seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: 101, name: "Episode 1", description: "Description of Episode 1", videoUrl: "url3" },
        ],
      },
    ],
  },
 
];

export default SeriesMovieData;
