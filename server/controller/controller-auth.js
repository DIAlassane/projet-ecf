
const logout = async (req, res) => {
    try {
        // Supprimer la session de l'utilisateur de la base de données (vous devez avoir une table pour stocker les sessions utilisateur)
        const userId = req.session.users.id;
        await pool.query("DELETE FROM sessions WHERE user_id = $1", [userId]);

        // Effacer le cookie de l'utilisateur
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true,
        }).status(200).json("Vous avez bien été déconnecté");
    } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { logout };