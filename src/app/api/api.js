export const sendContactForm = async (data) =>
    fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
        if (!res.ok) throw new Error("Sorry, We are facing a technical problem.. please send the email by your mailbox");
        return res.json();
    });