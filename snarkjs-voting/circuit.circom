template IsZero() {
    signal input in;
    signal output out;

    signal inv;

    inv <-- in != 0 ? 1/in : 0;

    out <== -in * inv + 1;
    in * out === 0;
}

template IsEqual() {
    signal input in1;
    signal input in2;
    signal output out;

    component isz = IsZero();

    in1 - in2 ==> isz.in;

    isz.out ==> out;
}

template VoterCheck() {
    // Input là ID của cử tri
    signal input voterID;
    // Hash table chứa các ID hợp lệ (chúng ta giả định là các số nguyên nhỏ)
    signal input validVoterIDs[3];  // Giả sử có 3 cử tri hợp lệ

    // Các biến đầu ra của IsEqual sẽ cho biết liệu voterID có bằng với mỗi ID hợp lệ trong danh sách không
    signal isEqual0;
    signal isEqual1;
    signal isEqual2;

    // Sử dụng IsEqual để so sánh voterID với từng validVoterID
    component eq0 = IsEqual();
    component eq1 = IsEqual();
    component eq2 = IsEqual();

    // So sánh voterID với validVoterIDs[0], validVoterIDs[1], validVoterIDs[2]
    eq0.in1 <== voterID;
    eq0.in2 <== validVoterIDs[0];

    eq1.in1 <== voterID;
    eq1.in2 <== validVoterIDs[1];
    
    eq2.in1 <== voterID;
    eq2.in2 <== validVoterIDs[2];

    // Các kết quả so sánh sẽ được lưu trong isEqual0, isEqual1, isEqual2
    isEqual0 <== eq0.out;
    isEqual1 <== eq1.out;
    isEqual2 <== eq2.out;

    // Bằng chứng: Nếu một trong các kết quả là 1, tức là voterID có trong danh sách hợp lệ
    signal isValid1;
    isValid1 <== isEqual0 + isEqual1;
    signal isValid;
    isValid <== isValid1 + isEqual2;  // Tổng các giá trị bằng 1 nếu cử tri hợp lệ

    signal output proofValid;
    proofValid <== isValid;  // Nếu proofValid = 1, cử tri hợp lệ
}

component main = VoterCheck();
