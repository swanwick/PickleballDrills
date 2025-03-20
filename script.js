const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabaseUrl = "https://teearsuzqqkjugzjnjau.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZWFyc3V6cXFranVnempuamF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNDM1MjEsImV4cCI6MjA1NzgxOTUyMX0.9n1gffxmNkcyW1D8DnJpQnlOQrXGRxLN4nWhCY584k8"; // Replace with your Anon Key
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch and Display Data
async function getDrills() {
    const { data, error } = await supabase
        .from('drills') // Ensure quotes if table name is capitalized
        .select('*');

    console.log("Supabase Response:", data, error); // Debugging line

    if (error) {
        console.error("Error fetching data:", error);
        return;
    }

    const list = document.getElementById("drills-list");
    list.innerHTML = ""; // Clear old data

    data.forEach(drill => {
        const listItem = document.createElement("li");
        listItem.textContent = drill.name; // Adjust this based on your table columns
        list.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", getDrills);
