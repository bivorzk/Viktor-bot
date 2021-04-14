module.exports = {
    name: 'clear',
    description: "Viktor szia, hogy vagy ",
    async execute(message, args){

        if (!args[0]) return message.reply("írd be azt a mennyiséget, amennyit ki akarsz törölni!");
 
        if(isNaN(args[0])) return message.reply("Kérlek irj be egy számot!");
 
        if(args[0] > 100) return message.reply("Száznál tobb uzenetett nem tudok kitorolni");
        
        if(args[0] < 1) return message.reply("Minimum egy karaktert ki kell torolnod!");

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
        

    }
}