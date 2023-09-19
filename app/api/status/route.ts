
import User from "../database/models/tes";


const a = new User({
    username: "fahrur",
    email: "OKS"
})

a.save().then((a:any) => console.log(a))
