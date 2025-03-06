const Lead = require("../model/Lead");

const createLead = async (req, res) => {
  try {
    const { name, email, status } = req.body;

    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      return res
        .status(400)
        .json({ error: "Lead with this email already exists" });
    }

    const lead = new Lead({ name, email, status });
    await lead.save();

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLeads = async (req, res) => {
  try {
    // Get all leads and sort them by createdAt in descending order
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createLead, getLeads };
