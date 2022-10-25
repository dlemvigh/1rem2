import { json } from "@sveltejs/kit";

export async function GET() {
    return json(
        {
            time: new Date().toISOString(),
            random: Math.random(),
            text: "Hello, world"
        },
        {
            status: 201,
            
            headers: {
                'access-control-allow-origin': '*',
                'content-type': 'application/json'
            }
        })
}