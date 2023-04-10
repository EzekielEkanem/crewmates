import { createClient } from '@supabase/supabase-js';
const URL = "https://jvwnvnxcyljilwwwmwas.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2d252bnhjeWxqaWx3d3dtd2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5Mjk4OTMsImV4cCI6MTk5NjUwNTg5M30.sokdwLsoEwldCCO2vvY6PWFTLPf9daoZ47JfNm-Hx_8";

export const supabase = createClient(URL, API_KEY);