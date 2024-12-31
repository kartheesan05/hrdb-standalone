"use strict";exports.id=309,exports.ids=[309],exports.modules={85572:(e,r,a)=>{a.r(r),a.d(r,{"003787c780d0b1412f89dc8cba2557dd4fc9d51b3a":()=>U,"005bcc5230eba17c29499c73f8a00c1c14e81367cb":()=>y,"402d5dd725747646d4b712edecc6e87a341e986955":()=>H,"405b56f370b18d9b7b38d660c3d4646c2d32af5853":()=>O,"40a32e889f787033d34e43c010758396575bca3ded":()=>v,"40ba612a8c87c4365687ae1c17a603b4a40805b48e":()=>T,"40cc87c780b504b12be444c7b52b79777878f92789":()=>A,"40f8c2640ac63a127b5cb508fb0ade93b3bb60b796":()=>S,"6097c4e23b14f894a9cc59f79ec8b7e3b891e3645d":()=>I,"60c80fe8f9a89b6400737f21a1907e5c22ffa77827":()=>C,"70829144303c8852a74b4c1022abe67cc36d97f6d4":()=>R});var n=a(21590);a(70376);let t=new(a(42449)).Pool({connectionString:process.env.DATABASE_URL});var o=a(16500);let i=o.z.object({email:o.z.string().email({message:"Please enter a valid email."}).trim(),password:o.z.string().min(8,{message:"Password must be 8 chars minimum"}).trim()}),s=i.extend({name:o.z.string().min(1,"Name is required"),role:o.z.enum(["admin","volunteer","incharge"],{required_error:"Role is required",invalid_type_error:"Invalid role"})}),l=o.z.object({hr_name:o.z.string().min(1,"HR name is required"),volunteer:o.z.string().min(1,"Volunteer name is required"),incharge:o.z.string().min(1,"Incharge name is required"),company:o.z.string().min(1,"Company name is required"),phone_number:o.z.string().regex(/^\d{10}$/,"Phone number must be exactly 10 digits"),status:o.z.enum(["Pending","Active","Inactive","Email_Sent","Not_Called","Blacklisted"],{required_error:"Status is required"}),email:o.z.string().email().optional().or(o.z.literal("")),interview_mode:o.z.enum(["Online","In-person","Both","Not Confirmed"],{required_error:"Interview mode is required",invalid_type_error:"Invalid interview mode"}).optional(),hr_count:o.z.number().int().min(1).default(1),transport:o.z.string().optional().or(o.z.literal("")),address:o.z.string().optional().or(o.z.literal("")),internship:o.z.enum(["Yes","No"]).default("No"),comments:o.z.string().optional().or(o.z.literal(""))});var c=a(99184);async function u(e){try{return(await t.query("SELECT * FROM users WHERE email = $1 LIMIT 1",[e])).rows[0]||null}catch(e){throw e}}var d=a(8805),m=a.n(d),h=a(41231),E=a(13194),g=a(42385);let f=process.env.SESSION_SECRET,_=new TextEncoder().encode(f);async function p(e){return new h.P(e).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("7d").sign(_)}async function b(e){try{let{payload:r}=await (0,E.V)(e,_,{algorithms:["HS256"]});return r}catch(e){}}async function w({email:e,role:r,incharge_email:a,name:n,incharge_name:t}){let o=new Date(Date.now()+6048e5),i={email:e,role:r,expiresAt:o};a&&(i.incharge_email=a),n&&(i.name=n),t&&(i.incharge_name=t);let s=await p(i);(await (0,g.UL)()).set("session",s,{expires:o,sameSite:"lax",path:"/"})}async function N(){await (0,g.UL)().delete("session")}async function $(){let e=(await g.UL()).get("session")?.value;return e&&await b(e)||null}async function v(e){let r=i.safeParse({email:e.get("email"),password:e.get("password")});if(!r.success)return console.log(r.error.flatten().fieldErrors),{errors:r.error.flatten().fieldErrors};let{email:a,password:n}=r.data,t=null,o=null,s=null;try{let e=await u(a);if(!e||!await m().compare(n,e.password))return{errors:"invaliduser"};if("volunteer"===e.role){let r=await u(e.incharge_email);s=r.name,r.email,await w({email:e.email,role:e.role,name:e.name,incharge_email:r.email,incharge_name:r.name})}else await w({email:e.email,role:e.role,name:e.name});t=e.role,o=e.name}catch(e){return console.log("error",e),{errors:"servererror"}}return{role:t,name:o,incharge:s}}async function y(){N(),(0,c.redirect)("/auth/login")}async function R(e=1,r=100,a={}){let n=await $();if(!n?.email)return{errors:"Unauthorized"};let o="SELECT * FROM hr_contacts",i=[],s=[];if("volunteer"===n.role)s.push("volunteer_email = $"+(i.length+1)),i.push(n.email);else if("incharge"===n.role)s.push("incharge_email = $"+(i.length+1)),i.push(n.email);else if("admin"!==n.role&&"global"!==n.role)return{errors:"Unauthorized"};a.name&&(s.push("hr_name ILIKE $"+(i.length+1)),i.push(`%${a.name}%`)),a.phoneNumber&&(s.push("phone_number ILIKE $"+(i.length+1)),i.push(`%${a.phoneNumber}%`)),a.search&&(s.push(`(
    hr_name ILIKE $${i.length+1} OR
    phone_number ILIKE $${i.length+1} OR
    email ILIKE $${i.length+1} OR
    company ILIKE $${i.length+1} OR
    volunteer ILIKE $${i.length+1} OR
    incharge ILIKE $${i.length+1} OR
    status ILIKE $${i.length+1} OR
    interview_mode ILIKE $${i.length+1} OR
    transport ILIKE $${i.length+1}
  )`),i.push(`%${a.search}%`)),a.interview&&(s.push("LOWER(interview_mode) = LOWER($"+(i.length+1)+")"),i.push(a.interview.toLowerCase())),a.status&&(s.push("status = $"+(i.length+1)),i.push(a.status)),s.length>0&&(o+=" WHERE "+s.join(" AND "));let l="SELECT COUNT(*) FROM hr_contacts"+(s.length>0?" WHERE "+s.join(" AND "):"");o+=` ORDER BY id LIMIT $${i.length+1} OFFSET $${i.length+2}`,i.push(r,(e-1)*r);try{let e=await t.query(o,i),r=await t.query(l,i.slice(0,-2)),a=parseInt(r.rows[0].count);return{data:e.rows,totalCount:a}}catch(e){throw e}}async function T(e){let r=await $();if(!r?.email)return{errors:"Unauthorized"};let a=l.safeParse({hr_name:e.hr_name,phone_number:e.phone_number,email:e.email,interview_mode:e.interview_mode,company:e.company,volunteer:e.volunteer,incharge:e.incharge,status:e.status,hr_count:e.hr_count?parseInt(e.hr_count):1,transport:e.transport,address:e.address,internship:e.internship||"No",comments:e.comments});if(!a.success)return{errors:a.error.flatten().fieldErrors};if("incharge"===r.role&&(!e.volunteer_email||!e.volunteer_email.includes("@")))return console.log("volunteer_email",e.volunteer_email),{errors:"A valid volunteer email is required"};if("admin"===r.role&&(!e.incharge_email||!e.volunteer_email||!e.incharge_email.includes("@")||!e.volunteer_email.includes("@")))return{errors:"Both incharge and volunteer emails are required and must be valid"};let n=a.data,o=`
    INSERT INTO hr_contacts (
      hr_name, phone_number, email, interview_mode, company,
      volunteer, incharge, status, hr_count, transport,
      address, internship, comments, incharge_email, volunteer_email
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING *
  `,i=[n.hr_name,n.phone_number,n.email,n.interview_mode,n.company,n.volunteer,n.incharge,n.status,n.hr_count,n.transport,n.address,n.internship,n.comments,"volunteer"===r.role?r.incharge_email:e.incharge_email,"volunteer"===r.role?r.email:e.volunteer_email];try{return(await t.query(o,i)).rows[0]}catch(e){if(console.error("Error adding HR record:",e),"23505"===e.code&&"unique_phone_number"===e.constraint)return{errors:"Phone number already exists in the database. Duplicate entries are not allowed."};return{errors:"Failed to add HR record"}}}async function C(e,r){let a=await $();if(!a?.email||"admin"!==a.role)return{errors:"Unauthorized"};let n=s.safeParse({email:r.email,password:r.password,role:r.role,name:r.name});if(!n.success)return{errors:n.error.flatten().fieldErrors};let o=r.inchargeEmail,{email:i,password:l,role:c,name:u}=n.data;if("volunteer"===c&&(console.log("inchargeEmail",o),0===(await t.query("SELECT * FROM users WHERE email = $1 AND role = $2",[o,"incharge"])).rows.length))return{errors:"Specified incharge email does not exist or is not an incharge"};let d=`
    INSERT INTO users (email, password, role, incharge_email, name) 
    VALUES ($1, $2, $3, $4, $5)
  `;try{let e=await m().hash(l,10);return await t.query(d,[i,e,c,"volunteer"===c?o:null,u]),{success:!0}}catch(e){return console.error("Error adding user:",e),{errors:"Server Error"}}}async function H(e){let r=await $();if(!r?.email)return{errors:"Unauthorized"};let a=`
    SELECT * FROM hr_contacts WHERE id = $1
  `,n=`
    SELECT email FROM users WHERE role = 'incharge'
  `;try{let[o,i]=await Promise.all([t.query(a,[e]),t.query(n)]);if(0===o.rows.length)return console.log("hr not found"),{errors:"HR record not found"};let s=o.rows[0];if("volunteer"===r.role&&s.volunteer_email!==r.email)return{errors:"Unauthorized - You can only view your own records"};if("incharge"===r.role&&s.incharge_email!==r.email)return{errors:"Unauthorized - You can only view records assigned to you"};if("volunteer"===r.role){let{volunteer_email:e,incharge_email:r,...a}=s;return{data:a,incharges:[]}}return{data:s,incharges:i.rows.map(e=>e.email)}}catch(e){return console.error("Error fetching HR record:",e),{errors:"Server Error"}}}async function I(e,r){let a=await $();if(!a?.email)return{errors:"Unauthorized"};let n=l.safeParse({hr_name:r.hr_name,phone_number:r.phone_number,email:r.email,interview_mode:r.interview_mode,company:r.company,volunteer:r.volunteer,incharge:r.incharge,status:r.status,hr_count:r.hr_count?parseInt(r.hr_count):1,transport:r.transport,address:r.address,internship:r.internship||"No",comments:r.comments});if(!n.success)return console.log("validatedFields error",n.error),{errors:n.error.flatten().fieldErrors};let o=n.data,i=`
    SELECT * FROM hr_contacts WHERE id = $1
  `;try{let n=await t.query(i,[e]);if(0===n.rows.length)return{errors:"HR record not found"};let s=n.rows[0];if("volunteer"===a.role&&s.volunteer_email!==a.email)return{errors:"Unauthorized - You can only edit your own records"};if("incharge"===a.role&&s.incharge_email!==a.email)return{errors:"Unauthorized - You can only edit records assigned to you"};let l=`
  UPDATE hr_contacts SET
    hr_name = $1,
    phone_number = $2,
    email = $3,
    interview_mode = $4,
    company = $5,
    volunteer = $6,
    incharge = $7,
    status = $8,
    hr_count = $9,
    transport = $10,
    address = $11,
    internship = $12,
    comments = $13,
    volunteer_email = $14,
    incharge_email = $15
  WHERE id = $16
  RETURNING *
`,c=[o.hr_name,o.phone_number,o.email,o.interview_mode,o.company,o.volunteer,o.incharge,o.status,o.hr_count,o.transport,o.address,o.internship,o.comments,"volunteer"===a.role?a.email:r.volunteer_email,"volunteer"===a.role?a.incharge_email:"incharge"===a.role?s.incharge_email:r.incharge_email,e],u=await t.query(l,c);if(0===u.rows.length)return{errors:"HR record not found"};return{data:u.rows[0]}}catch(e){if(console.error("Error updating HR record:",e),"23505"===e.code&&"unique_phone_number"===e.constraint)return{errors:"Phone number already exists in the database. Duplicate entries are not allowed."};return{errors:"Failed to update HR record"}}}async function O(e){let r=await $();if(!r?.email)return{errors:"Unauthorized"};let a=`
    SELECT * FROM hr_contacts WHERE id = $1
  `;try{let n=await t.query(a,[e]);if(0===n.rows.length)return{errors:"HR record not found"};let o=n.rows[0];if("volunteer"===r.role&&o.volunteer_email!==r.email)return{errors:"Unauthorized - You can only delete your own records"};if("incharge"===r.role&&o.incharge_email!==r.email)return{errors:"Unauthorized - You can only delete records assigned to you"};let i=`
      DELETE FROM hr_contacts WHERE id = $1
    `;return await t.query(i,[e]),{success:!0}}catch(e){return console.error("Error deleting HR record:",e),{errors:"Failed to delete HR record"}}}async function S(e){let r=await $();if(!r?.email||"incharge"!==r.role&&"admin"!==r.role)return{errors:"Unauthorized"};let a=`
    SELECT 
      u.name,
      COUNT(CASE WHEN h.status = 'Email_Sent' THEN 1 END) as "Email Sent",
      COUNT(CASE WHEN h.status = 'Not_Called' THEN 1 END) as "Not Called",
      COUNT(CASE WHEN h.status = 'Active' THEN 1 END) as "Accepted",
      COUNT(CASE WHEN h.status = 'Pending' THEN 1 END) as "Pending",
      COUNT(CASE WHEN h.status = 'Inactive' THEN 1 END) as "Declined",
      COUNT(CASE WHEN h.status = 'Blacklisted' THEN 1 END) as "Blacklisted",
      COUNT(*) as contacts
    FROM users u
    LEFT JOIN hr_contacts h ON u.email = h.volunteer_email
    WHERE u.role = 'volunteer' 
    AND u.incharge_email = $1
    GROUP BY u.name
    ORDER BY u.name
  `;try{return{data:(await t.query(a,["incharge"===r.role?r.email:e])).rows}}catch(e){return console.error("Error fetching member stats:",e),{errors:"Failed to fetch member statistics"}}}async function U(){let e=await $();if(!e?.email||"admin"!==e.role)return{errors:"Unauthorized"};let r=`
    SELECT 
      u.name,
      COUNT(CASE WHEN h.status = 'Email_Sent' THEN 1 END) as "Email Sent",
      COUNT(CASE WHEN h.status = 'Not_Called' THEN 1 END) as "Not Called",
      COUNT(CASE WHEN h.status = 'Active' THEN 1 END) as "Accepted",
      COUNT(CASE WHEN h.status = 'Pending' THEN 1 END) as "Pending",
      COUNT(CASE WHEN h.status = 'Inactive' THEN 1 END) as "Declined",
      COUNT(CASE WHEN h.status = 'Blacklisted' THEN 1 END) as "Blacklisted",
      COUNT(*) as contacts
    FROM users u
    LEFT JOIN hr_contacts h ON u.email = h.incharge_email
    WHERE u.role = 'incharge'
    GROUP BY u.name
    ORDER BY u.name
  `;try{return{data:(await t.query(r,[])).rows}}catch(e){return console.error("Error fetching incharge stats:",e),{errors:"Failed to fetch incharge statistics"}}}async function A(e){let r=await $();if(!r?.email)return{errors:"Unauthorized"};let a=[],n=[];for(let o of e)try{let e=`
        INSERT INTO hr_contacts (
          hr_name, phone_number, email, interview_mode, company,
          volunteer, incharge, status, hr_count, transport,
          address, internship, comments, incharge_email, volunteer_email
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        RETURNING *
      `,a=[o.hr_name,o.phone_number,o.email||"",o.interview_mode||"Not Confirmed",o.company,r.name,r.incharge_name?r.incharge_name:r.name,"Not_Called",1,o.transport||"",o.address||"","No",o.comments||"",r.incharge_email?r.incharge_email:r.email,r.email],i=await t.query(e,a);i.rows[0]&&n.push(o),console.log("result",i.rows[0])}catch(e){"23505"===e.code&&"unique_phone_number"===e.constraint&&a.push({hr_name:o.hr_name,phone_number:o.phone_number})}return console.log("duplicates",a),console.log("successfulInserts",n),{success:!0,duplicates:a.length>0?a:null,message:`Successfully added ${n.length} records${a.length>0?`. ${a.length} duplicates found.`:"."}`}}(0,a(99344).D)([v,y,R,T,C,H,I,O,S,U,A]),(0,n.A)(v,"40a32e889f787033d34e43c010758396575bca3ded",null),(0,n.A)(y,"005bcc5230eba17c29499c73f8a00c1c14e81367cb",null),(0,n.A)(R,"70829144303c8852a74b4c1022abe67cc36d97f6d4",null),(0,n.A)(T,"40ba612a8c87c4365687ae1c17a603b4a40805b48e",null),(0,n.A)(C,"60c80fe8f9a89b6400737f21a1907e5c22ffa77827",null),(0,n.A)(H,"402d5dd725747646d4b712edecc6e87a341e986955",null),(0,n.A)(I,"6097c4e23b14f894a9cc59f79ec8b7e3b891e3645d",null),(0,n.A)(O,"405b56f370b18d9b7b38d660c3d4646c2d32af5853",null),(0,n.A)(S,"40f8c2640ac63a127b5cb508fb0ade93b3bb60b796",null),(0,n.A)(U,"003787c780d0b1412f89dc8cba2557dd4fc9d51b3a",null),(0,n.A)(A,"40cc87c780b504b12be444c7b52b79777878f92789",null)},69576:(e,r,a)=>{a.d(r,{BT:()=>c,Wu:()=>u,ZB:()=>l,Zp:()=>i,aR:()=>s,wL:()=>d});var n=a(45512),t=a(58009),o=a(86645);let i=t.forwardRef(({className:e,...r},a)=>(0,n.jsx)("div",{ref:a,className:(0,o.cn)("rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",e),...r}));i.displayName="Card";let s=t.forwardRef(({className:e,...r},a)=>(0,n.jsx)("div",{ref:a,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",e),...r}));s.displayName="CardHeader";let l=t.forwardRef(({className:e,...r},a)=>(0,n.jsx)("h3",{ref:a,className:(0,o.cn)("font-semibold leading-none tracking-tight",e),...r}));l.displayName="CardTitle";let c=t.forwardRef(({className:e,...r},a)=>(0,n.jsx)("p",{ref:a,className:(0,o.cn)("text-sm text-neutral-500 dark:text-neutral-400",e),...r}));c.displayName="CardDescription";let u=t.forwardRef(({className:e,...r},a)=>(0,n.jsx)("div",{ref:a,className:(0,o.cn)("p-6 pt-0",e),...r}));u.displayName="CardContent";let d=t.forwardRef(({className:e,...r},a)=>(0,n.jsx)("div",{ref:a,className:(0,o.cn)("flex items-center p-6 pt-0",e),...r}));d.displayName="CardFooter"}};