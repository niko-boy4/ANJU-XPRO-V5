//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xmdENtMVJYU1Zqb3Brcm16N2t2akROWWZkMFJRUEltMUpSTzUxWW9FOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjFmYzQ3dFNGRWx1eExUdjBvQ1o4YTZtMTNENm1JcWpIT085bmhKaHRBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSmx5eU9zVDgrT0h3MHZFTEhNazVIVmExV1IwcVBNaEhNSEVVbzZ3Y2xBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPb3BDaVJWQ3pKQTAxNHo3a2ZVdlR1Q1JCelB1anVzNGpKVS9FUVBzb1hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9GbVpNeVBaaTM5eTFrKzJpYnNWMWYwVm9ZVjMrS09sczhoWkxuMnRYbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNjRzJ6ckdBRGNJbnNseWplbitZNE5lM3RwZFRxTVlwcUZWR0JyUTFmRDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hyUm9LUkpaNThwck0vTEVrN1RwazU3WEZHT040K3IyLzFYOXNHeFJrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWloTmlYLzhvYTNkRlR6bXJBWUpBYTh1ZlBQNk1QcWVnVW9ldmVYVHBXMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im56NnluVWN3ek5ldDZrZHM1MDArSEEvOFY3bFlnQjNyb2JhZmlGR0xNdG02TDI2bnF3TWlic0NHbGhjeFRDdnY0aDBRSHF1MFFVK1RuRVIyRDFFR0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJYaXZrYzF5L25oVldweS9KNzYrYnlkaEh3RE9idUNFTHk5dW1JUDdsRnNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTSHlvYkxBN1EwS0JpNFl1V1p1Qy1nIiwicGhvbmVJZCI6ImI0ZTEyMTFjLTgzOGEtNGM2ZS1hMjVhLWMzYzI4MTRkYzY2ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQeHN0MEtZSzErNEdMYmlGWUpQVE1MeFZvZUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzE2Y09UZFRWUENTTW4zbkd2WXorQWdlNzI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlUMlg4OTNKIiwibWUiOnsiaWQiOiI5NDcwNDAyMDE0Njo5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTc4NjAyMzg5ODYwNTY2OjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQM3cyN1lFRU5lYzM4SUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQSlBURDA2dVRlYU5RTmZVR3hpWWc1VCs4Y2trSVZhMEVEL2RpZ1ZONjNZPSIsImFjY291bnRTaWduYXR1cmUiOiJxMmxkWjg5d3lkdDBCOGRaM3B4eDN2aE9YZkVOUTlqZWVIM2hPOUliZjBKV3FVRkxTbkpPUk1FMzFtSHJQRUpRVklqU3Z3QzdKNE1QSFk3bm9lVzFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoici9YRnBJeVQycTFpTVVlVzdiTGx2ekYwcmxuSmxmaTJaYkNFRk9IY1V6ZGZtYkt1SGVpNHpPbjBGNWdwbHhxdm1wT0g4Z3NwTnZwSS9lRm04a0E1Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNDAyMDE0Njo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlR5VDB3OU9yazNtalVEWDFCc1ltSU9VL3ZISkpDRld0QkEvM1lvRlRldDIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lBdz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDU4NDkzMSwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOMEYifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94743595243",
  PASSWORD: 
    process.env.PASSWORD || "1674",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94743595243", "94704020146"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
