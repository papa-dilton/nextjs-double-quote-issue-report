import {readFileSync} from 'fs';
import {NextResponse} from 'next/server'
export function GET() {
    return NextResponse.json(JSON.parse(readFileSync('app/api/v1/blog/data.json', 'utf8')))
}
