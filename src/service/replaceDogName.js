export default function replaceDog(dog) {
    if(dog !== " "){
        const dogLw = dog.toLowerCase();
        const dgRp = dogLw.replace(" ","-");
        return dgRp;
    }
}