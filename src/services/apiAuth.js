import supabase from "./supabase.js";

export async function signupApi({fullName, email, password, contactNumber}) {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
                contactNumber,
                avatar: "",
            },
        },
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function loginApi({email, password}) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const {data: session} = await supabase.auth.getSession();
    if (!session.session) return null;


    const {data, error} = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data?.user;
}

export async function logoutApi() {
    const {error} = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}

export async function logout() {
    const {error} = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}

export async function createUserApi({fullName, email, contactNumber}) {
    const newData = {fullName, email, contactNumber}
    const {data, error} = await supabase.from('users').insert(newData);

    if (error) throw new Error(error.message);

    return data;

}

export async function findByEmail(email) {
    const {data, error} = await supabase.from('users')
        .select("*").eq("email",email).single();

    if (error) throw new Error(error.message);

    return data;

}

export async function getUsers() {
    let {data, error} = await supabase
        .from('users')
        .select('*')
    console.log(data);
    if (error) {
        console.error(error);
        throw new Error("UsersLayout could not be loaded");
    }

    return data;
}

export async function deleteUserApi(email) {
    const {data, error} = await supabase.from('users').delete().eq("email", email)

    if (error) {
        console.error(error);
        throw new Error("User could not be deleted");
    }

    return data;
}