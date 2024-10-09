import supabase from "../../supabase";

export const sendEmail = async (formData: {
  name: string;
  email: string;
  contents: string;
}) => {
  const { name, email, contents } = formData;
  const { data: responseData, error } = await supabase
    .from("email")
    .insert([{ name, email, contents }])
    .select(); // Add this line to return the inserted data

  if (error) {
    console.error("Error inserting data:", error.message);
    return null;
  }

  return responseData?.[0] || null; // Return the first inserted row or null
};
