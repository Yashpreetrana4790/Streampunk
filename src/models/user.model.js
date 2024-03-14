import { mongo, mongoose, Schema } from "mongoose";


const userSchema = mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  aavatar: {
    type: String  //cloudinary link
  },
  coverImage: {
    type: String
  },
  watchHistory: [{
    type: Schema.Types.ObjectId, ref: "Video"
  }],
  password: {
    type: String,
    required: [true, 'password is required']

  },
  refreshToken: {

  }


}, {
  timestamps: true
}
)

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()
  this.password = bcrypt.hash(this.password, 10)
  next()
})  // before saving the data I want to run this hook



// for injecting custom methods 

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = async function (password) {
  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  }
  )
}

userSchema.methods.generateRefreshToken = async function (password) {
  jwt.sign(
    {
      _id: this._id,

    },
    process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  }
  )
}


export const User = mongoose.model("User", userSchema)