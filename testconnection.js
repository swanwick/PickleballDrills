const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase Client
const supabaseUrl = "https://teearsuzqqkjugzjnjau.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZWFyc3V6cXFranVnempuamF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNDM1MjEsImV4cCI6MjA1NzgxOTUyMX0.9n1gffxmNkcyW1D8DnJpQnlOQrXGRxLN4nWhCY584k8"; // Use Service Role key for admin operations
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Fetch data from a table
async function getData() {
    const { data, error } = await supabase
        .from('drills')
        .select('*');

    if (error) console.error(error);
    else console.log(data);
}

getData();
