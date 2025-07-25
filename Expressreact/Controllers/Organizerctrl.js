// const org = require("../Models/Organizermodel")

// const createOrg = async(req ,res)=>{
//     try {
//         const {eventname,date,place,time,host}=req.body;
//         const newOrg = new org({
//             eventname,
//             date,
//             place,
//             time,
//             host
//         });
//           await newOrg.save();
//         res.status(201).json({message:"Organizer Created Successfully"});

//     } catch (error) {
//         res.status(400).json({
//             error:"Error in creating organizer"
//         });
        
//     }
// };

// const getOrg = async(req , res)=>{
//     try {
//         const Organizer = await org.find();
//         res.json(Organizer)
//     } catch (error) {
//         res.status(500).json({message:"Internal Error"})
//     }
// };

// const patchOrg = async(req, res)=>{
//     try {
        
//     const orgId = req.params.id;
//     const updatedData = req.body;

//     const updatedOrganizer = await org.findByIdAndUpdate(
//         orgId,
//         {$set:updatedData},
//         {new: true}
//     );

//     if(!updatedOrganizer){
//         return res.status(404).json({message:"Page not founded"});
//     }
//     res.status(200).json({
//         message:"Updated Successfully" ,
//         data : updatedOrganizer
//     });
//     } catch (error) {
//         res.status(500).json({message:"Internal server error"});
//     }
// }

// const deleteOrg = async(req , res)=>{
//     try {
//         await org.deleteMany({})
//         res.status(200).json({message:"organizers deleted successfully"});
//     } catch (error) {
//         res.status(500).json({message:"failed to delete organizer"})
        
//     }
// }

// module.exports = {getOrg , createOrg , patchOrg , deleteOrg} 





const org = require("../Models/Organizermodel");

const createOrg = async (req, res) => {
  try {
    const {
      name,
      organizationName,
      email,
      phone,
      password,
      address,
      bio,
      profileImage
    } = req.body;

    const newOrg = new org({
      name,
      organizationName,
      email,
      phone,
      password,
      address,
      bio,
      profileImage
    });

    await newOrg.save();

    res.status(201).json({ message: "Organizer Created Successfully", data: newOrg });
  } catch (error) {
    res.status(400).json({
      error: "Error in creating organizer",
      details: error.message
    });
  }
};

const getOrg = async (req, res) => {
  try {
    const Organizer = await org.find();
    res.json(Organizer);
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

const patchOrg = async (req, res) => {
  try {
    const orgId = req.params.id;
    const updatedData = req.body;

    const updatedOrganizer = await org.findByIdAndUpdate(
      orgId,
      { $set: updatedData },
      { new: true }
    );

    if (!updatedOrganizer) {
      return res.status(404).json({ message: "Organizer not found" });
    }

    res.status(200).json({
      message: "Updated Successfully",
      data: updatedOrganizer
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// const deleteOrg = async (req, res) => {
//   try {
//     await org.deleteMany({});
//     res.status(200).json({ message: "Organizers deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete organizers" });
//   }
// };



// ✅ Add this function
const getOrgById = async (req, res) => {
  try {
    const orgId = req.params.id;
    const organizer = await org.findById(orgId);

    if (!organizer) {
      return res.status(404).json({ message: "Organizer not found" });
    }

    res.status(200).json({
      name: organizer.name,
      email: organizer.email,
      phone: organizer.phone
      // profileImage: organizer.profileImage 
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = { getOrg, createOrg, patchOrg , getOrgById};    
