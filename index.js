const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: false});

bot.on("ready", async () => {
bot.user.setActivity("server", {type: 'WATCHING' })
});

bot.on("message", async message => {
  if(message.author.bot) return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}hostinterview`){
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
let sessionChannel = message.guild.channels.find(`name`, "session-announcements");
let time = args[0];

if(time == "11"){
  const sEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":clipboard: 11 AM Interviews")
             .setDescription("Head over to Tropidise's interview center for a chance to be a Trainee! The server will close 10 minutes before 11 AM EST.")
             .addField("Host:", `<@${message.author.id}>`)
             .addField("Link:", "[Interview Center](https://www.roblox.com/games/2154796513/Tropidise-Interview-Center)")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(sEmbed)
  sessionChannel.send('@everyone')
}
if(time == "12:30"){
  const sEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":clipboard: 12:30 PM Interviews")
             .setDescription("Head over to Tropidise's interview center for a chance to be a Trainee! The server will close 10 minutes before 12:30 PM EST.")
             .addField("Host:", `<@${message.author.id}>`)
             .addField("Link:", "[Interview Center](https://www.roblox.com/games/2154796513/Tropidise-Interview-Center)")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(sEmbed)
  sessionChannel.send('@everyone')
}
if(time == "1:30"){
  const sEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":clipboard: 1:30 PM Interviews")
             .setDescription("Head over to Tropidise's interview center for a chance to be a Trainee! The server will close 10 minutes before 1:30 PM EST.")
             .addField("Host:", `<@${message.author.id}>`)
             .addField("Link:", "[Interview Center](https://www.roblox.com/games/2154796513/Tropidise-Interview-Center)")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(sEmbed)
  sessionChannel.send('@everyone')
}
if(time == "3:30"){
  const sEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":clipboard: 3:30 PM Interviews")
             .setDescription("Head over to Tropidise's interview center for a chance to be a Trainee! The server will close 10 minutes before 3:30 PM EST.")
             .addField("Host:", `<@${message.author.id}>`)
             .addField("Link:", "[Interview Center](https://www.roblox.com/games/2154796513/Tropidise-Interview-Center)")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(sEmbed)
  sessionChannel.send('@everyone')
}
}

if(cmd === `${prefix}hosttraining`){
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
let sessionChannel = message.guild.channels.find(`name`, "session-announcements");
let time = args[0];

if(time == "10"){
  const sEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":clipboard: 10 AM Trainings")
             .setDescription("Head over to Tropidise's training center for a chance to be a Trainee! The server will close 10 minutes before 10 AM EST.")
             .addField("Host:", `<@${message.author.id}>`)
             .addField("Link:", "[Training Center](https://www.roblox.com/games/2154819001/Tropidise-Training-Center)")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(sEmbed)
  sessionChannel.send('@everyone')
}
if(time == "11"){
  const sEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":clipboard: 11 AM Trainings")
             .setDescription("Head over to Tropidise's training center for a chance to be a Trainee! The server will close 10 minutes before 11 AM EST.")
             .addField("Host:", `<@${message.author.id}>`)
             .addField("Link:", "[Training Center](https://www.roblox.com/games/2154819001/Tropidise-Training-Center)")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(sEmbed)
  sessionChannel.send('@everyone')
}
if(time == "11:30"){
  const sEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":clipboard: 11:30 AM Trainings")
             .setDescription("Head over to Tropidise's training center for a chance to be a Trainee! The server will close 10 minutes before 11:30 AM EST.")
             .addField("Host:", `<@${message.author.id}>`)
             .addField("Link:", "[Training Center](https://www.roblox.com/games/2154819001/Tropidise-Training-Center)")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(sEmbed)
  sessionChannel.send('@everyone')
}
if(time == "2:30"){
  const sEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":clipboard: 2:30 PM Trainings")
             .setDescription("Head over to Tropidise's training center for a chance to be a Trainee! The server will close 10 minutes before 2:30 PM EST.")
             .addField("Host:", `<@${message.author.id}>`)
             .addField("Link:", "[Training Center](https://www.roblox.com/games/2154819001/Tropidise-Training-Center)")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(sEmbed)
  sessionChannel.send('@everyone')
}
}

if(cmd === `${prefix}announce`){
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
if(message.member.hasPermission("MANAGE_NICKNAMES")){
let args = message.content.split(" ");
let annChannel = message.guild.channels.find(`name`, "public-announcements");
const text = args.slice(1).join(" ");
if (text.length < 1) return message.channel.send("Please provide an announcement to be announced.");
const annEmbed = new Discord.RichEmbed()
           .setColor("#ffcc60")
           .setTitle(":mega: **Announcement**")
           .addField("Announced By:", `<@${message.author.id}>`)
           .setDescription(text)
           .setFooter("TropidiseV1")
           .setTimestamp();
           if(message.member.hasPermission("MANAGE_NICKNAMES")){
             annChannel.send(annEmbed)
             annChannel.send('@everyone')
           }
       }
   }

if(cmd === `${prefix}endinterview`){
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
  let sessionChannel = message.guild.channels.find(`name`, "session-announcements");
  const eEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":exclamation: **Interviews Ended**")
             .setDescription("Our interviews have ended! If you didn't pass or couldn't make it, try coming to our next interview. Congratulations to all the passers.")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(eEmbed)
}

if(cmd === `${prefix}endtraining`){
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
  let sessionChannel = message.guild.channels.find(`name`, "session-announcements");
  const eEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle(":exclamation: **Trainings Ended**")
             .setDescription("Our trainings have ended! If you didn't pass or couldn't make it, try coming to our next training. Congratulations to all the passers.")
             .setFooter("TropidiseV1")
             .setTimestamp();
  sessionChannel.send(eEmbed)
}

if(cmd === `${prefix}kick`){
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let kReason = args.join(" ").slice(22);
  if(kUser.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("They are unable to be kicked.");
  let kickEmbed = new Discord.RichEmbed()
  .setDescription(":mans_shoe: **Kicked User**")
  .addField("Kick User", `${kUser}`)
  .setColor("#ffcc60")
  .addField("Kicked By", `<@${message.author.id}>`)
  .addField("Reason", kReason);
  let kickChannel = message.guild.channels.find(`name`, "logs");
  if(!kickChannel) return message.channel.send("Can't find logs channel.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
}

if(cmd === `${prefix}ban`){
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let kReason = args.join(" ").slice(22);
  if(kUser.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("They are unable to be banned.");
  let kickEmbed = new Discord.RichEmbed()
  .setDescription(":boxing_glove: **Banned User**")
  .addField("Banned User", `${kUser} with BanID ${kUser.id}`)
  .setColor("#ffcc60")
  .addField("Banned By", `<@${message.author.id}>`)
  .addField("Reason", kReason);
  let kickChannel = message.guild.channels.find(`name`, "logs");
  if(!kickChannel) return message.channel.send("Can't find logs channel.");
  let bEmbed = new Discord.RichEmbed()
  .setColor("#ffcc60")
  .addField("BanID", `${kUser.id}`)
  .addField("Reason of ban", kReason)
  .addField("Ban Appeal Discord", "COMING SOON!")
  .setFooter("TropidiseV1")
  .setTimestamp();
  kUser.send("You've been banned from Tropidise's discord! Here's a link to our ban appeals server and information to be appealed!", bEmbed);
  message.guild.member(kUser).ban(kReason);
  kickChannel.send(kickEmbed);
}

if(cmd === `${prefix}resort`){
let bicon = message.guild.iconURL;
let resortembed = new Discord.RichEmbed()

.setDescription("Tropidise Resort")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
  return message.channel.send(resortembed)
}

if(cmd === `${prefix}training`){
let bicon = message.guild.iconURL;
let trainembed = new Discord.RichEmbed()

.setDescription("Tropidise Training Center")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
return message.channel.send(trainembed)
}

if(cmd === `${prefix}interview`){
let bicon = message.guild.iconURL;
let interembed = new Discord.RichEmbed()

.setDescription("Tropidise Interview Center")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
return message.channel.send(interembed)
}

if(cmd === `${prefix}application`){
let bicon = message.guild.iconURL;
let appembed = new Discord.RichEmbed()

.setDescription("Tropidise Applications")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
return message.channel.send(appembed)
}

if(cmd === `${prefix}event`){
let bicon = message.guild.iconURL;
let eventembed = new Discord.RichEmbed()

.setDescription("Tropidise Event Center")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
return message.channel.send(eventembed)
}

if(cmd === `${prefix}twitter`){
let bicon = message.guild.iconURL;
let twitterembeed = new Discord.RichEmbed()

.setDescription("Tropidise Twitter")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
return message.channel.send(twitterembeed)
}
if(cmd === `${prefix}discord`){
let bicon = message.guild.iconURL;
let discordembed = new Discord.RichEmbed()

.setDescription("Tropidise Discord")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
return message.channel.send(discordembed)
}

if(cmd === `${prefix}help`){
  let helpEmbed = new Discord.RichEmbed()
  .setTitle(":desktop: Command List")
  .setColor("#ffbb56")
  .setDescription("!help\n!ban\n!kick\n!announce\n!hostinterview\n!hosttraining\n!endinterview\n!endtraining\n!resort\n!training\n!interview\n!application\n!event\n!twitter\n!discord")
  .setFooter("TropidiseV1")
  .setTimestamp();
  message.channel.send(helpEmbed)
}

  if(cmd === `${prefix}submit`) {
    let link = args[0]; // Remember arrays are 0-based!.
    let banID = args[1];
    let banChannel = message.guild.channels.find("name", "check-appeals")
    let submitEmbed = new Discord.RichEmbed()
    .setTitle("Ban Appeal")
    .setColor("#ffbb56")
    .addField("Submitter", `<@${message.author.id}>`)
    .addField("Link", link)
    .addField("banID", banID)
    .setFooter("TropidiseBANS")
    .setTimestamp();

    banChannel.send(submitEmbed);
    message.reply("Submitted, please wait at least 5 days!");
  }

if(cmd === `${prefix}accept`){
   if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
  const bUser = message.mentions.users.first();
  bUser.send("You've been unbanned from Tropidise's main server! Here's a new link, https://discord.gg/uZ6hkYB!");
}

if(cmd === `${prefix}decline`){
   if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
  const bUser = message.mentions.users.first();
  bUser.send("You've been declined access from Tropidise's main server! Try appealing again soon.");
}
  
});

bot.login(botconfig.token);
