import clientPromise from "../../lib/mongodb";

export default async (req,res) => {
    try {
        
        const client = await clientPromise;
        const db = client.db("landing-page");

        const data = await db.collection("Website").find({}).toArray();

        res.json(data);

    } catch (error) {
        console.log(error);
    }
};