import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  try {
    const credentialsResponse = await axios.get(process.env.DATASOURCE_ENDPOINT_URL!);

    return NextResponse.json(credentialsResponse.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data from external API' }, { status: 500 });
  }
}
