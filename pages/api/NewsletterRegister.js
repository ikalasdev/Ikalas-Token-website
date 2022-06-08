export default function handler (req, res) {
    const data = JSON.parse(req.body);
    async function Register(email)
    {
        const response = await fetch("https://ikalas.com/api/v1/registertonewsletter",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "ApiKey": process.env.NEXT_PUBLIC_API_KEY
            },
            body: JSON.stringify({
                "email": email
            })

        });
        var result = await response.json();

        return result;
    }
    
    if (!data.email) {
        return res.status(400).json({ output: "error" });
    }
    else
    {
        Register(data.email)
        .then(function(response)
        {
            return res.status(200).json({output : response.output.result});
        })
    }


}
