#include "circom.hpp"
#include "calcwit.hpp"
#define NSignals 29
#define NComponents 7
#define NOutputs 1
#define NInputs 4
#define NVars 11
#define NPublic 5
#define __P__ "21888242871839275222246405745257275088548364400416034343698204186575808495617"

/*
VoterCheck
*/
void VoterCheck_0da2d5746332fae7(Circom_CalcWit *ctx, int __cIdx) {
    FrElement _sigValue[1];
    FrElement _sigValue_1[1];
    FrElement _sigValue_2[1];
    FrElement _sigValue_3[1];
    FrElement _sigValue_4[1];
    FrElement _sigValue_5[1];
    FrElement _sigValue_6[1];
    FrElement _sigValue_7[1];
    FrElement _sigValue_8[1];
    FrElement _sigValue_9[1];
    FrElement _sigValue_10[1];
    FrElement _tmp[1];
    FrElement _sigValue_11[1];
    FrElement _sigValue_12[1];
    FrElement _tmp_1[1];
    FrElement _sigValue_13[1];
    int _compIdx;
    int _in1_sigIdx_;
    int _voterID_sigIdx_;
    int _compIdx_1;
    int _in2_sigIdx_;
    int _validVoterIDs_sigIdx_;
    int _offset;
    int _compIdx_2;
    int _in1_sigIdx__1;
    int _compIdx_3;
    int _in2_sigIdx__1;
    int _offset_1;
    int _compIdx_4;
    int _in1_sigIdx__2;
    int _compIdx_5;
    int _in2_sigIdx__2;
    int _offset_2;
    int _compIdx_6;
    int _out_sigIdx_;
    int _isEqual0_sigIdx_;
    int _compIdx_7;
    int _out_sigIdx__1;
    int _isEqual1_sigIdx_;
    int _compIdx_8;
    int _out_sigIdx__2;
    int _isEqual2_sigIdx_;
    int _isValid1_sigIdx_;
    int _isValid_sigIdx_;
    int _proofValid_sigIdx_;
    Circom_Sizes _sigSizes_validVoterIDs;
    _voterID_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x9bb2b36cae16bb40LL /* voterID */);
    _validVoterIDs_sigIdx_ = ctx->getSignalOffset(__cIdx, 0xc3ff9cc5f52d65edLL /* validVoterIDs */);
    _isEqual0_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x14d54ead3ded71ddLL /* isEqual0 */);
    _isEqual1_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x14d54dad3ded702aLL /* isEqual1 */);
    _isEqual2_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x14d54cad3ded6e77LL /* isEqual2 */);
    _isValid1_sigIdx_ = ctx->getSignalOffset(__cIdx, 0xecee0252fc0b6c50LL /* isValid1 */);
    _isValid_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x645a3bc684679a41LL /* isValid */);
    _proofValid_sigIdx_ = ctx->getSignalOffset(__cIdx, 0xf73179ce8ab5e1a5LL /* proofValid */);
    _sigSizes_validVoterIDs = ctx->getSignalSizes(__cIdx, 0xc3ff9cc5f52d65edLL /* validVoterIDs */);
    /* signal input voterID */
    /* signal input validVoterIDs[3] */
    /* signal isEqual0 */
    /* signal isEqual1 */
    /* signal isEqual2 */
    /* component eq0 = IsEqual() */
    /* component eq1 = IsEqual() */
    /* component eq2 = IsEqual() */
    /* eq0.in1 <== voterID */
    _compIdx = ctx->getSubComponentOffset(__cIdx, 0xc2fa4118f05c0de9LL /* eq0 */);
    _in1_sigIdx_ = ctx->getSignalOffset(_compIdx, 0x2b9fc4192bd463fdLL /* in1 */);
    ctx->multiGetSignal(__cIdx, __cIdx, _voterID_sigIdx_, _sigValue, 1);
    ctx->setSignal(__cIdx, _compIdx, _in1_sigIdx_, _sigValue);
    /* eq0.in2 <== validVoterIDs[0] */
    _compIdx_1 = ctx->getSubComponentOffset(__cIdx, 0xc2fa4118f05c0de9LL /* eq0 */);
    _in2_sigIdx_ = ctx->getSignalOffset(_compIdx_1, 0x2b9fc1192bd45ee4LL /* in2 */);
    _offset = _validVoterIDs_sigIdx_;
    ctx->multiGetSignal(__cIdx, __cIdx, _offset, _sigValue_1, 1);
    ctx->setSignal(__cIdx, _compIdx_1, _in2_sigIdx_, _sigValue_1);
    /* eq1.in1 <== voterID */
    _compIdx_2 = ctx->getSubComponentOffset(__cIdx, 0xc2fa4018f05c0c36LL /* eq1 */);
    _in1_sigIdx__1 = ctx->getSignalOffset(_compIdx_2, 0x2b9fc4192bd463fdLL /* in1 */);
    ctx->multiGetSignal(__cIdx, __cIdx, _voterID_sigIdx_, _sigValue_2, 1);
    ctx->setSignal(__cIdx, _compIdx_2, _in1_sigIdx__1, _sigValue_2);
    /* eq1.in2 <== validVoterIDs[1] */
    _compIdx_3 = ctx->getSubComponentOffset(__cIdx, 0xc2fa4018f05c0c36LL /* eq1 */);
    _in2_sigIdx__1 = ctx->getSignalOffset(_compIdx_3, 0x2b9fc1192bd45ee4LL /* in2 */);
    _offset_1 = _validVoterIDs_sigIdx_ + 1*_sigSizes_validVoterIDs[1];
    ctx->multiGetSignal(__cIdx, __cIdx, _offset_1, _sigValue_3, 1);
    ctx->setSignal(__cIdx, _compIdx_3, _in2_sigIdx__1, _sigValue_3);
    /* eq2.in1 <== voterID */
    _compIdx_4 = ctx->getSubComponentOffset(__cIdx, 0xc2fa3f18f05c0a83LL /* eq2 */);
    _in1_sigIdx__2 = ctx->getSignalOffset(_compIdx_4, 0x2b9fc4192bd463fdLL /* in1 */);
    ctx->multiGetSignal(__cIdx, __cIdx, _voterID_sigIdx_, _sigValue_4, 1);
    ctx->setSignal(__cIdx, _compIdx_4, _in1_sigIdx__2, _sigValue_4);
    /* eq2.in2 <== validVoterIDs[2] */
    _compIdx_5 = ctx->getSubComponentOffset(__cIdx, 0xc2fa3f18f05c0a83LL /* eq2 */);
    _in2_sigIdx__2 = ctx->getSignalOffset(_compIdx_5, 0x2b9fc1192bd45ee4LL /* in2 */);
    _offset_2 = _validVoterIDs_sigIdx_ + 2*_sigSizes_validVoterIDs[1];
    ctx->multiGetSignal(__cIdx, __cIdx, _offset_2, _sigValue_5, 1);
    ctx->setSignal(__cIdx, _compIdx_5, _in2_sigIdx__2, _sigValue_5);
    /* isEqual0 <== eq0.out */
    _compIdx_6 = ctx->getSubComponentOffset(__cIdx, 0xc2fa4118f05c0de9LL /* eq0 */);
    _out_sigIdx_ = ctx->getSignalOffset(_compIdx_6, 0x19f79b1921bbcfffLL /* out */);
    ctx->multiGetSignal(__cIdx, _compIdx_6, _out_sigIdx_, _sigValue_6, 1);
    ctx->setSignal(__cIdx, __cIdx, _isEqual0_sigIdx_, _sigValue_6);
    /* isEqual1 <== eq1.out */
    _compIdx_7 = ctx->getSubComponentOffset(__cIdx, 0xc2fa4018f05c0c36LL /* eq1 */);
    _out_sigIdx__1 = ctx->getSignalOffset(_compIdx_7, 0x19f79b1921bbcfffLL /* out */);
    ctx->multiGetSignal(__cIdx, _compIdx_7, _out_sigIdx__1, _sigValue_7, 1);
    ctx->setSignal(__cIdx, __cIdx, _isEqual1_sigIdx_, _sigValue_7);
    /* isEqual2 <== eq2.out */
    _compIdx_8 = ctx->getSubComponentOffset(__cIdx, 0xc2fa3f18f05c0a83LL /* eq2 */);
    _out_sigIdx__2 = ctx->getSignalOffset(_compIdx_8, 0x19f79b1921bbcfffLL /* out */);
    ctx->multiGetSignal(__cIdx, _compIdx_8, _out_sigIdx__2, _sigValue_8, 1);
    ctx->setSignal(__cIdx, __cIdx, _isEqual2_sigIdx_, _sigValue_8);
    /* signal isValid1 */
    /* isValid1 <== isEqual0 + isEqual1 */
    ctx->multiGetSignal(__cIdx, __cIdx, _isEqual0_sigIdx_, _sigValue_9, 1);
    ctx->multiGetSignal(__cIdx, __cIdx, _isEqual1_sigIdx_, _sigValue_10, 1);
    Fr_add(_tmp, _sigValue_9, _sigValue_10);
    ctx->setSignal(__cIdx, __cIdx, _isValid1_sigIdx_, _tmp);
    /* signal isValid */
    /* isValid <== isValid1 + isEqual2 */
    ctx->multiGetSignal(__cIdx, __cIdx, _isValid1_sigIdx_, _sigValue_11, 1);
    ctx->multiGetSignal(__cIdx, __cIdx, _isEqual2_sigIdx_, _sigValue_12, 1);
    Fr_add(_tmp_1, _sigValue_11, _sigValue_12);
    ctx->setSignal(__cIdx, __cIdx, _isValid_sigIdx_, _tmp_1);
    /* signal output proofValid */
    /* proofValid <== isValid */
    ctx->multiGetSignal(__cIdx, __cIdx, _isValid_sigIdx_, _sigValue_13, 1);
    ctx->setSignal(__cIdx, __cIdx, _proofValid_sigIdx_, _sigValue_13);
    ctx->finished(__cIdx);
}
/*
IsEqual
*/
void IsEqual_a4ccc896f031163f(Circom_CalcWit *ctx, int __cIdx) {
    FrElement _sigValue[1];
    FrElement _sigValue_1[1];
    FrElement _tmp[1];
    FrElement _sigValue_2[1];
    int _compIdx;
    int _in_sigIdx_;
    int _in1_sigIdx_;
    int _in2_sigIdx_;
    int _compIdx_1;
    int _out_sigIdx_;
    int _out_sigIdx__1;
    _in1_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x2b9fc4192bd463fdLL /* in1 */);
    _in2_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x2b9fc1192bd45ee4LL /* in2 */);
    _out_sigIdx__1 = ctx->getSignalOffset(__cIdx, 0x19f79b1921bbcfffLL /* out */);
    /* signal input in1 */
    /* signal input in2 */
    /* signal output out */
    /* component isz = IsZero() */
    /* in1 - in2 ==> isz.in */
    _compIdx = ctx->getSubComponentOffset(__cIdx, 0x2bcbfb192bf9fc5dLL /* isz */);
    _in_sigIdx_ = ctx->getSignalOffset(_compIdx, 0x08b73807b55c4bbeLL /* in */);
    ctx->multiGetSignal(__cIdx, __cIdx, _in1_sigIdx_, _sigValue, 1);
    ctx->multiGetSignal(__cIdx, __cIdx, _in2_sigIdx_, _sigValue_1, 1);
    Fr_sub(_tmp, _sigValue, _sigValue_1);
    ctx->setSignal(__cIdx, _compIdx, _in_sigIdx_, _tmp);
    /* isz.out ==> out */
    _compIdx_1 = ctx->getSubComponentOffset(__cIdx, 0x2bcbfb192bf9fc5dLL /* isz */);
    _out_sigIdx_ = ctx->getSignalOffset(_compIdx_1, 0x19f79b1921bbcfffLL /* out */);
    ctx->multiGetSignal(__cIdx, _compIdx_1, _out_sigIdx_, _sigValue_2, 1);
    ctx->setSignal(__cIdx, __cIdx, _out_sigIdx__1, _sigValue_2);
    ctx->finished(__cIdx);
}
/*
IsZero
*/
void IsZero_0a2b8515b81b5ef3(Circom_CalcWit *ctx, int __cIdx) {
    FrElement _sigValue[1];
    FrElement _tmp[1];
    FrElement _sigValue_1[1];
    FrElement _tmp_1[1];
    FrElement _sigValue_2[1];
    FrElement _tmp_2[1];
    FrElement _sigValue_3[1];
    FrElement _tmp_3[1];
    FrElement _tmp_4[1];
    FrElement _sigValue_4[1];
    FrElement _sigValue_5[1];
    FrElement _tmp_5[1];
    int _in_sigIdx_;
    int _inv_sigIdx_;
    int _out_sigIdx_;
    PFrElement _ter;
    _in_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x08b73807b55c4bbeLL /* in */);
    _inv_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x2b9ffd192bd4c4d8LL /* inv */);
    _out_sigIdx_ = ctx->getSignalOffset(__cIdx, 0x19f79b1921bbcfffLL /* out */);
    /* signal input in */
    /* signal output out */
    /* signal inv */
    /* inv <-- in != 0 ? 1/in : 0 */
    ctx->multiGetSignal(__cIdx, __cIdx, _in_sigIdx_, _sigValue, 1);
    Fr_neq(_tmp, _sigValue, (ctx->circuit->constants + 0));
    if (Fr_isTrue(_tmp)) {
        ctx->multiGetSignal(__cIdx, __cIdx, _in_sigIdx_, _sigValue_1, 1);
        Fr_div(_tmp_1, (ctx->circuit->constants + 1), _sigValue_1);
        _ter = _tmp_1;
    } else {
        _ter = (ctx->circuit->constants + 0);
    }
    ctx->setSignal(__cIdx, __cIdx, _inv_sigIdx_, _ter);
    /* out <== -in * inv + 1 */
    ctx->multiGetSignal(__cIdx, __cIdx, _in_sigIdx_, _sigValue_2, 1);
    Fr_neg(_tmp_2, _sigValue_2);
    ctx->multiGetSignal(__cIdx, __cIdx, _inv_sigIdx_, _sigValue_3, 1);
    Fr_mul(_tmp_3, _tmp_2, _sigValue_3);
    Fr_add(_tmp_4, _tmp_3, (ctx->circuit->constants + 1));
    ctx->setSignal(__cIdx, __cIdx, _out_sigIdx_, _tmp_4);
    /* in * out === 0 */
    ctx->multiGetSignal(__cIdx, __cIdx, _in_sigIdx_, _sigValue_4, 1);
    ctx->multiGetSignal(__cIdx, __cIdx, _out_sigIdx_, _sigValue_5, 1);
    Fr_mul(_tmp_5, _sigValue_4, _sigValue_5);
    ctx->checkConstraint(__cIdx, _tmp_5, (ctx->circuit->constants + 0), "C:\Users\Admin\Documents\UEH\LTMM\zk-voting-system\snarkjs-voting\circuit.circom:10:4");
    ctx->finished(__cIdx);
}
// Function Table
Circom_ComponentFunction _functionTable[3] = {
     VoterCheck_0da2d5746332fae7
    ,IsEqual_a4ccc896f031163f
    ,IsZero_0a2b8515b81b5ef3
};
