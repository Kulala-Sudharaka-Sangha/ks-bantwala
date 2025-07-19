import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin/app";
import * as fs from "fs";
import serviceAccount from "./serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

const db = admin.firestore();
const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

// ---- COMMITTEE ----
async function importCommittee() {
  const committee = data["committee-members-info"];
  const docRef = db.collection("committee-members-info").doc("2025-26");

  await docRef.set({
    teamName: committee.teamName,
    aboutTeam: committee.aboutTeam,
  });

  const batch = db.batch();
  for (const member of committee.membersList) {
    const memberRef = docRef.collection("members").doc(member.id);
    batch.set(memberRef, member);
  }
  await batch.commit();
  console.log("✅ Committee members imported.");
}

// ---- SEVADALA ----
async function importSevadala() {
  const sevadala = data["sevadala-members-info"];
  const docRef = db.collection("sevadala-members-info").doc("2025-26");

  await docRef.set({
    teamName: sevadala.teamName,
    aboutTeam: sevadala.aboutTeam,
  });

  const batch = db.batch();
  for (const member of sevadala.membersList) {
    const memberRef = docRef.collection("members").doc(member.id);
    batch.set(memberRef, member);
  }
  await batch.commit();
  console.log("✅ Sevadala members imported.");
}

// ---- MAHILA MANDALI ----
async function importMahila() {
  const mahila = data["mahila-mandali-members-info"];
  const docRef = db.collection("mahila-mandali-members-info").doc("2025-26");

  await docRef.set({
    teamName: mahila.teamName,
    aboutTeam: mahila.aboutTeam,
  });

  const batch = db.batch();
  for (const member of mahila.membersList) {
    const memberRef = docRef.collection("members").doc(member.id);
    batch.set(memberRef, member);
  }
  await batch.commit();
  console.log("✅ Mahila Mandali members imported.");
}

// ---- LIFETIME MEMBERS ----
async function importLifetime() {
  const lifetime = data["life-time-members-list-info"].membersList;
  const batch = db.batch();

  for (const member of lifetime) {
    const memberRef = db.collection("life-time-members").doc(member.voterID);
    batch.set(memberRef, member);
  }

  await batch.commit();
  console.log("✅ Lifetime members imported.");
}

async function importPastMembers() {
  const pastMembers = data["past-members-info"].membersList;
  const batch = db.batch();

  for (const member of pastMembers) {
    const memberRef = db.collection("past-members").doc(member.id);
    batch.set(memberRef, member);
  }

  await batch.commit();
  console.log("✅ Past members imported.");
}

// ---- RUN ALL ----
(async () => {
  try {
    await importCommittee();
    await importSevadala();
    await importMahila();
    await importLifetime();
    await importPastMembers();
    console.log("🎉 All data imported to Firestore successfully!");
  } catch (err) {
    console.error("❌ Error importing:", err);
  }
})();
