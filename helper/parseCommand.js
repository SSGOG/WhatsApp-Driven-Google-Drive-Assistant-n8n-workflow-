function parseMessage(msg) {
  const cmd = msg.trim().split(' ')[0].toUpperCase();
  const args = msg.trim().split(' ').slice(1);
  return { cmd, args };
}

return parseMessage($json["Body"]);
