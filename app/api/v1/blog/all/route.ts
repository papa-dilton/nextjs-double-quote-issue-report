import FS from 'fs';
export function GET() {
    return JSON.parse(FS.readFileSync('app/api/v1/blog/data.json', 'utf8'))
}
