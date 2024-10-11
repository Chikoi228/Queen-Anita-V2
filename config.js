//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlUTURSV0Jsc21MSEhhVmc3ZXBpRE1IZ2NGMjFORmU5RVZ5c1pNL0FHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnRhS0cvbjlMb3JLKytoVnBtVi94Z3JIbnJUb1JMei9rd21pa3NWSE5rRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TGNDS205VFg3Z1drMTJJaHk4OUQ2V2dKQUU2aFFQNWp2V1FUMWo4Qm1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ZXhXSE1sRW1TZDRsWVlEcUxkVEs4V3ZSSmRyWkNnMDBjWjdjUzc0ZFdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGcTYydTZUSzdjL1NkemNjU211SW9zbGo4YUQ3S1FDbTRtbDRSMkRIVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims5ZnQ3c3lkTXRFSm13UzMxcys3QUg5cXZpTW50YXhSbElBRDFvclVVMGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOElqZ1g0cDhZeXZUUEJXUm15bCtUeGdXMnBRN0tOQUp0N3lmTWZqUXlWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm5ncVNlS3JSWWoyeEJVcXBqd2VJcUVsbXVabHBOMzBLckIxY3Q5bGNRRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9DN1VxMGwvM1gyRy9HUml2Y0dwdzUrMmZDcXhnYWtIZ1k1cVc0WUhsRUYrUlhxT0xkSHFWSjIrMllhRDdOTlFYQVVBNzRUZUdFM2QvNFBicmVnamhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiJ0UnM4eEtGV2NRdG9Tbm51WjZiRitKRmFmcy9JcDJZa1pQSTJIbVUvQ1FJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNTE5NTgxNTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkVEQTMwMDkzMTk5MDM2NUYzNUVBOUE2MDRGMEUyQjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODY3NTcxNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA1MTk1ODE1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxRDRFNEQ2NDg5NkY3MkFGNzU0NUE3MEEyMUZFMzZBNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4Njc1NzE4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFN1NUWTN2V1FxT3gySEFNX1g3SEtBIiwicGhvbmVJZCI6IjY0NTY5MTAwLTkyYmQtNDAyNi1hMTM5LTg2MGFhZTNkMjA2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnZXFyTlV5SXZmbUcwRThnaWFCek5xNTJhUVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWThXQ0N0QjJJWS93ZUNsSzBiSzRQZ0VENm53PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFEUTY4NFhIIiwibWUiOnsiaWQiOiIyMzQ3MDUxOTU4MTUxOjE3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMjgxekFROVA2bHVBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoSkRjcVh2Q2dZYTZHZ0RYV1FtbzhWWjNuTnRaRk1BMTlYNG8zc1IzanpNPSIsImFjY291bnRTaWduYXR1cmUiOiJOWFZNVVpvV0NjRXphell3RWR6L1Vsb216dHBranU5ZXpkOVRtNnQrdnJSeW5DZUJnQU9ackZqYVJVOUw0d0ZFRVZJazdkUUkwVXFXcDlMWXA2QnVEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU1JPck9KaUx6WnZzTFZ3emlKV3crUzRHZWtkWXFLcFk3cWhoemNTK2s4cUc5QklyUWIyYjErWTJhVmQ5RU02V0psRkxNZkxKdk9CZ3ZsMUpnKytBanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDUxOTU4MTUxOjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllTUTNLbDd3b0dHdWhvQTExa0pxUEZXZDV6YldSVEFOZlYrS043RWQ0OHoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg2NzU3MTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEtnIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
